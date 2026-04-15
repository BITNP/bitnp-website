<template>
  <div ref="matrixRoot" class="matrix-root" aria-hidden="true">
    <canvas ref="matrixCanvas" class="matrix-field" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

interface MatrixConfig {
  darkDownSeconds: number;
  hideBasePerSecond: number;
  hideLitPerSecond: number;
  lightUpSeconds: number;
  mutationChance: number;
  seedMax: number;
  seedMin: number;
  spreadAt: number;
  spreadInterval: number;
  spreadRate: number;
  targetFps: number;
}

interface MatrixModel {
  activeCells: number[];
  baseCanvas: HTMLCanvasElement;
  baseCtx: CanvasRenderingContext2D;
  cellCount: number;
  cellSizePx: number;
  cellState: Uint8Array;
  columns: number;
  config: MatrixConfig;
  dpr: number;
  emitted: Uint8Array;
  fontSizePx: number;
  glyphVisible: boolean[];
  glyphs: string[];
  colors: MatrixColors;
  phase: Float32Array;
  rows: number;
  rngState: number;
  spreadCarry: number;
}

interface MatrixColors {
  baseRgb: [number, number, number];
  litRgb: [number, number, number];
}

interface PulseDurations {
  darkDown: number;
  lightUp: number;
  total: number;
}

const props = withDefaults(
  defineProps<{
    darkDownDuration?: number;
    lightUpDuration?: number;
    matrixSpeed?: number;
    mutationProbability?: number;
    spreadSpeed?: number;
  }>(),
  {
    darkDownDuration: 0.62,
    lightUpDuration: 0.24,
    matrixSpeed: 1,
    mutationProbability: 0.12,
    spreadSpeed: 1,
  },
);

const matrixRoot = ref<HTMLElement | null>(null);
const matrixCanvas = ref<HTMLCanvasElement | null>(null);

const PRINTABLE_ASCII_START = 33;
const PRINTABLE_ASCII_END = 126;
const MAX_CELL_COUNT = 1600;
const MAX_SPEED = 2;
const INACTIVE = 0;
const ACTIVE = 1;
const CELL_GAP_RATIO = 1.28;

const asciiChars: string[] = Array.from(
  { length: PRINTABLE_ASCII_END - PRINTABLE_ASCII_START + 1 },
  (_, index) => String.fromCharCode(PRINTABLE_ASCII_START + index),
);

let model: MatrixModel | null = null;

let animationFrameId: number | null = null;
let resizeObserver: ResizeObserver | null = null;
let intersectionObserver: IntersectionObserver | null = null;
let reducedMotionQuery: MediaQueryList | null = null;
let themeObserver: MutationObserver | null = null;

let supportsReducedMotion = false;
let isInViewport = true;
let pageVisible = true;
let previousTimestamp = 0;

const clampSpeed = (speed: number): number => {
  if (Number.isNaN(speed)) {
    return 1;
  }

  return Math.min(MAX_SPEED, Math.max(0, speed));
};

const getSpeed = (): number => clampSpeed(props.matrixSpeed);

const clampNormalized = (value: number): number => Math.min(1, Math.max(0, value));

const getConfigFromProps = (): MatrixConfig => {
  const spreadBase = Math.max(0.4, props.spreadSpeed);

  return {
    darkDownSeconds: Math.max(0.06, props.darkDownDuration),
    hideBasePerSecond: 0.9,
    hideLitPerSecond: 0.45,
    lightUpSeconds: Math.max(0.06, props.lightUpDuration),
    mutationChance: clampNormalized(props.mutationProbability),
    seedMax: 5,
    seedMin: 3,
    spreadAt: 0.34,
    spreadInterval: 0.065 / spreadBase,
    spreadRate: 0.68 * spreadBase,
    targetFps: 60,
  };
};

const getPulseDurations = (config: MatrixConfig, speed: number): PulseDurations => {
  const speedScale = 1 + speed * 0.5;
  const lightUp = Math.max(0.05, config.lightUpSeconds / speedScale);
  const darkDown = Math.max(0.05, config.darkDownSeconds / speedScale);

  return {
    darkDown,
    lightUp,
    total: lightUp + darkDown,
  };
};

const easeInOut = (progress: number): number => {
  const clampedProgress = Math.min(1, Math.max(0, progress));
  return 0.5 - 0.5 * Math.cos(Math.PI * clampedProgress);
};

const randomAscii = (runtimeModel: MatrixModel): string => {
  const randomInt = nextRandomInt(runtimeModel);
  const charIndex = randomInt % asciiChars.length;
  return asciiChars[charIndex] ?? "#";
};

const nextRandomInt = (runtimeModel: MatrixModel): number => {
  let state = runtimeModel.rngState | 0;

  state ^= state << 13;
  state ^= state >>> 17;
  state ^= state << 5;

  runtimeModel.rngState = state;

  return state >>> 0;
};

const randomUnit = (runtimeModel: MatrixModel): number => {
  return nextRandomInt(runtimeModel) / 0xffffffff;
};

const randomRangeInt = (runtimeModel: MatrixModel, min: number, max: number): number => {
  if (max <= min) {
    return min;
  }

  const delta = max - min + 1;
  return min + (nextRandomInt(runtimeModel) % delta);
};

const DEFAULT_BASE_RGB: [number, number, number] = [124, 64, 29];
const DEFAULT_LIT_RGB: [number, number, number] = [255, 194, 128];

const parseHexColor = (rawValue: string): [number, number, number] | null => {
  const normalized = rawValue.trim();

  if (!normalized.startsWith("#")) {
    return null;
  }

  const hex = normalized.slice(1);

  if (hex.length === 3) {
    const [r, g, b] = hex.split("");

    if (!r || !g || !b) {
      return null;
    }

    return [
      Number.parseInt(`${r}${r}`, 16),
      Number.parseInt(`${g}${g}`, 16),
      Number.parseInt(`${b}${b}`, 16),
    ];
  }

  if (hex.length !== 6) {
    return null;
  }

  return [
    Number.parseInt(hex.slice(0, 2), 16),
    Number.parseInt(hex.slice(2, 4), 16),
    Number.parseInt(hex.slice(4, 6), 16),
  ];
};

const parseRgbTriplet = (rawValue: string): [number, number, number] | null => {
  const trimmed = rawValue.trim();

  if (!trimmed) {
    return null;
  }

  const hexRgb = parseHexColor(trimmed);

  if (hexRgb) {
    return hexRgb;
  }

  const wrappedMatch = trimmed.match(/rgba?\(([^)]+)\)/i);
  const value = wrappedMatch?.[1] ?? trimmed;
  const parts = value.split(",").map((part) => Number.parseFloat(part.trim()));

  if (parts.length < 3) {
    return null;
  }

  const r = parts[0] ?? Number.NaN;
  const g = parts[1] ?? Number.NaN;
  const b = parts[2] ?? Number.NaN;

  if ([r, g, b].some((numberPart) => !Number.isFinite(numberPart))) {
    return null;
  }

  return [
    Math.round(Math.min(255, Math.max(0, r))),
    Math.round(Math.min(255, Math.max(0, g))),
    Math.round(Math.min(255, Math.max(0, b))),
  ];
};

const resolveMatrixColors = (): MatrixColors => {
  const rootStyle = getComputedStyle(document.documentElement);
  const textStrong = rootStyle.getPropertyValue("--text-strong");
  const textRgb = rootStyle.getPropertyValue("--text-rgb");
  const accentRgb = rootStyle.getPropertyValue("--accent-rgb");
  const accent = rootStyle.getPropertyValue("--accent");

  return {
    baseRgb: parseRgbTriplet(textStrong) ?? parseRgbTriplet(textRgb) ?? DEFAULT_BASE_RGB,
    litRgb: parseRgbTriplet(accentRgb) ?? parseRgbTriplet(accent) ?? DEFAULT_LIT_RGB,
  };
};

const refreshModelColors = (runtimeModel: MatrixModel): void => {
  runtimeModel.colors = resolveMatrixColors();
};

const drawBaseGlyph = (runtimeModel: MatrixModel, cellIndex: number): void => {
  const { baseCtx, cellSizePx, colors, columns, dpr, glyphVisible, glyphs } = runtimeModel;
  const column = cellIndex % columns;
  const row = Math.floor(cellIndex / columns);
  const glyph = glyphs[cellIndex] ?? "#";

  baseCtx.clearRect(column * cellSizePx, row * cellSizePx, cellSizePx, cellSizePx);

  if (!glyphVisible[cellIndex]) {
    return;
  }

  baseCtx.fillStyle = `rgba(${colors.baseRgb[0]}, ${colors.baseRgb[1]}, ${colors.baseRgb[2]}, ${
    0.16 * dpr
  })`;
  baseCtx.fillText(glyph, column * cellSizePx, row * cellSizePx);
};

const redrawBaseGrid = (runtimeModel: MatrixModel): void => {
  for (let cellIndex = 0; cellIndex < runtimeModel.cellCount; cellIndex += 1) {
    drawBaseGlyph(runtimeModel, cellIndex);
  }
};

const stopAnimation = (): void => {
  if (animationFrameId === null) {
    return;
  }

  cancelAnimationFrame(animationFrameId);
  animationFrameId = null;
};

const mutateGlyphAt = (runtimeModel: MatrixModel, cellIndex: number): void => {
  runtimeModel.glyphs[cellIndex] = randomAscii(runtimeModel);
  drawBaseGlyph(runtimeModel, cellIndex);
};

const activateCell = (runtimeModel: MatrixModel, cellIndex: number): boolean => {
  const { activeCells, cellState, phase, emitted } = runtimeModel;
  const maxActive = Math.min(runtimeModel.cellCount, 220);

  if (activeCells.length >= maxActive) {
    return false;
  }

  if ((cellState[cellIndex] ?? INACTIVE) === ACTIVE) {
    phase[cellIndex] = Math.min(phase[cellIndex] ?? 0, 0.22);
    return false;
  }

  cellState[cellIndex] = ACTIVE;
  phase[cellIndex] = 0;
  emitted[cellIndex] = 0;
  activeCells.push(cellIndex);

  return true;
};

const infectCell = (runtimeModel: MatrixModel, cellIndex: number): boolean => {
  const activated = activateCell(runtimeModel, cellIndex);

  if (!activated) {
    return false;
  }

  runtimeModel.glyphVisible[cellIndex] = true;

  if (randomUnit(runtimeModel) < runtimeModel.config.mutationChance) {
    mutateGlyphAt(runtimeModel, cellIndex);
    return true;
  }

  drawBaseGlyph(runtimeModel, cellIndex);

  return true;
};

const seedWave = (runtimeModel: MatrixModel): void => {
  const { cellCount, config } = runtimeModel;

  if (cellCount === 0) {
    return;
  }

  const seedCount = randomRangeInt(runtimeModel, config.seedMin, config.seedMax);

  for (let index = 0; index < seedCount; index += 1) {
    const target = nextRandomInt(runtimeModel) % cellCount;
    infectCell(runtimeModel, target);
  }
};

const rebuildModel = (): void => {
  const canvas = matrixCanvas.value;

  if (!canvas) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const cssWidth = Math.max(1, Math.floor(rect.width));
  const cssHeight = Math.max(1, Math.floor(rect.height));

  const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 1.5));

  canvas.width = Math.floor(cssWidth * dpr);
  canvas.height = Math.floor(cssHeight * dpr);

  let fontSizePx = Math.max(14, Math.round((cssWidth < 768 ? 18 : 22) * dpr));
  let cellSizePx = Math.round(fontSizePx * CELL_GAP_RATIO);
  let columns = Math.max(1, Math.floor(canvas.width / cellSizePx));
  let rows = Math.max(1, Math.floor(canvas.height / cellSizePx));

  while (columns * rows > MAX_CELL_COUNT) {
    fontSizePx += 1;
    cellSizePx = Math.round(fontSizePx * CELL_GAP_RATIO);
    columns = Math.max(1, Math.floor(canvas.width / cellSizePx));
    rows = Math.max(1, Math.floor(canvas.height / cellSizePx));
  }

  const cellCount = columns * rows;
  const baseCanvas = document.createElement("canvas");
  baseCanvas.width = canvas.width;
  baseCanvas.height = canvas.height;

  const baseCtx = baseCanvas.getContext("2d");

  if (!baseCtx) {
    return;
  }

  baseCtx.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
  baseCtx.font = `${fontSizePx}px "JetBrains Mono", "Fira Mono", "SFMono-Regular", monospace`;
  baseCtx.textBaseline = "top";

  const runtimeModel: MatrixModel = {
    activeCells: [],
    baseCanvas,
    baseCtx,
    cellCount,
    cellSizePx,
    cellState: new Uint8Array(cellCount),
    columns,
    config: getConfigFromProps(),
    dpr,
    emitted: new Uint8Array(cellCount),
    fontSizePx,
    glyphVisible: Array.from({ length: cellCount }, () => Math.random() < 0.34),
    glyphs: Array.from({ length: cellCount }, () => {
      const randomIndex = Math.floor(Math.random() * asciiChars.length);
      return asciiChars[randomIndex] ?? "#";
    }),
    colors: resolveMatrixColors(),
    phase: new Float32Array(cellCount),
    rows,
    rngState: (Date.now() ^ cellCount) | 0 || 1,
    spreadCarry: 0,
  };

  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      const cellIndex = rowIndex * columns + columnIndex;
      drawBaseGlyph(runtimeModel, cellIndex);
    }
  }

  model = runtimeModel;
  seedWave(runtimeModel);
};

const getLevelByPhase = (phase: number, durations: PulseDurations): number => {
  const elapsed = phase * durations.total;

  if (elapsed <= durations.lightUp) {
    return easeInOut(elapsed / durations.lightUp);
  }

  return 1 - easeInOut((elapsed - durations.lightUp) / durations.darkDown);
};

const drawFrame = (): void => {
  const canvas = matrixCanvas.value;
  const state = model;

  if (!canvas || !state) {
    return;
  }

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const speed = getSpeed();
  const durations = getPulseDurations(state.config, speed);
  const { activeCells, baseCanvas, cellSizePx, colors, columns, fontSizePx, glyphs, phase } = state;

  redrawBaseGrid(state);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseCanvas, 0, 0);

  if (activeCells.length === 0) {
    return;
  }

  ctx.font = `${fontSizePx}px "JetBrains Mono", "Fira Mono", "SFMono-Regular", monospace`;
  ctx.textBaseline = "top";

  for (let index = 0; index < activeCells.length; index += 1) {
    const cellIndex = activeCells[index] ?? 0;
    const level = getLevelByPhase(phase[cellIndex] ?? 0, durations);

    if (level < 0.02) {
      continue;
    }

    const column = cellIndex % columns;
    const row = Math.floor(cellIndex / columns);
    const glyph = glyphs[cellIndex] ?? "#";

    ctx.fillStyle = `rgba(${colors.litRgb[0]}, ${colors.litRgb[1]}, ${colors.litRgb[2]}, 0.92)`;
    ctx.fillText(glyph, column * cellSizePx, row * cellSizePx);
  }

  ctx.shadowBlur = 0;
};

const spreadFromCell = (
  runtimeModel: MatrixModel,
  cellIndex: number,
  chance: number,
  budgetRef: { remaining: number },
): void => {
  const { columns, rows } = runtimeModel;
  const row = Math.floor(cellIndex / columns);
  const column = cellIndex % columns;

  for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
    for (let columnOffset = -1; columnOffset <= 1; columnOffset += 1) {
      if (rowOffset === 0 && columnOffset === 0) {
        continue;
      }

      if (budgetRef.remaining <= 0) {
        return;
      }

      const nextRow = row + rowOffset;
      const nextColumn = column + columnOffset;

      if (nextRow < 0 || nextRow >= rows || nextColumn < 0 || nextColumn >= columns) {
        continue;
      }

      if (randomUnit(runtimeModel) >= chance) {
        continue;
      }

      const nextIndex = nextRow * columns + nextColumn;

      if (infectCell(runtimeModel, nextIndex)) {
        budgetRef.remaining -= 1;
      }
    }
  }
};

const stepMatrix = (deltaSeconds: number): void => {
  const state = model;

  if (!state || state.cellCount === 0) {
    return;
  }

  const speed = getSpeed();

  if (speed <= 0) {
    return;
  }

  const { activeCells, cellState, config, emitted, glyphVisible, phase } = state;
  const durations = getPulseDurations(config, speed);
  const phaseDelta = deltaSeconds / durations.total;
  const litHideChance = clampNormalized(config.hideLitPerSecond * deltaSeconds);

  for (let index = activeCells.length - 1; index >= 0; index -= 1) {
    const cellIndex = activeCells[index] ?? 0;

    if (randomUnit(state) < litHideChance) {
      glyphVisible[cellIndex] = false;
      cellState[cellIndex] = INACTIVE;
      phase[cellIndex] = 0;
      emitted[cellIndex] = 0;

      const last = activeCells.length - 1;

      if (index !== last) {
        activeCells[index] = activeCells[last] ?? cellIndex;
      }

      activeCells.pop();
      continue;
    }

    const nextPhase = (phase[cellIndex] ?? 0) + phaseDelta;
    phase[cellIndex] = nextPhase;

    if (nextPhase < 1) {
      continue;
    }

    cellState[cellIndex] = INACTIVE;
    phase[cellIndex] = 0;
    emitted[cellIndex] = 0;

    const last = activeCells.length - 1;

    if (index !== last) {
      activeCells[index] = activeCells[last] ?? cellIndex;
    }

    activeCells.pop();
  }

  const baseHideChance = clampNormalized(config.hideBasePerSecond * deltaSeconds);
  const hideProbeCount = Math.max(1, Math.ceil(64 * deltaSeconds * (1 + speed * 0.4)));

  for (let probeIndex = 0; probeIndex < hideProbeCount; probeIndex += 1) {
    const cellIndex = nextRandomInt(state) % state.cellCount;

    if ((cellState[cellIndex] ?? INACTIVE) === ACTIVE) {
      continue;
    }

    if (!glyphVisible[cellIndex]) {
      continue;
    }

    if (randomUnit(state) >= baseHideChance) {
      continue;
    }

    glyphVisible[cellIndex] = false;
  }

  state.spreadCarry += deltaSeconds;
  const spreadInterval = Math.max(0.03, config.spreadInterval / (1 + speed * 0.5));

  if (state.spreadCarry >= spreadInterval) {
    state.spreadCarry -= spreadInterval;

    const budgetRef = { remaining: 70 };
    const spreadChance = clampNormalized(config.spreadRate * (0.35 + speed * 0.25));

    for (let index = 0; index < activeCells.length; index += 1) {
      if (budgetRef.remaining <= 0) {
        break;
      }

      const cellIndex = activeCells[index] ?? 0;

      if ((emitted[cellIndex] ?? 0) === 1) {
        continue;
      }

      if ((phase[cellIndex] ?? 0) < config.spreadAt) {
        continue;
      }

      spreadFromCell(state, cellIndex, spreadChance, budgetRef);
      emitted[cellIndex] = 1;
    }
  }

  if (activeCells.length === 0) {
    seedWave(state);
  }
};

const shouldAnimate = (): boolean => {
  const speed = getSpeed();
  return !supportsReducedMotion && pageVisible && isInViewport && speed > 0;
};

const animationLoop = (timestamp: number): void => {
  if (!shouldAnimate()) {
    animationFrameId = null;
    return;
  }

  if (previousTimestamp === 0) {
    previousTimestamp = timestamp;
  }

  const state = model;
  const frameBudgetMs = 1000 / Math.max(12, state?.config.targetFps ?? 60);
  const elapsed = timestamp - previousTimestamp;

  if (elapsed >= frameBudgetMs) {
    const deltaSeconds = Math.min(0.08, elapsed / 1000);
    previousTimestamp = timestamp;
    stepMatrix(deltaSeconds);
    drawFrame();
  }

  animationFrameId = requestAnimationFrame(animationLoop);
};

const scheduleAnimation = (): void => {
  if (!shouldAnimate() || animationFrameId !== null) {
    drawFrame();
    return;
  }

  previousTimestamp = 0;
  animationFrameId = requestAnimationFrame(animationLoop);
};

const handleVisibilityChange = (): void => {
  pageVisible = document.visibilityState === "visible";

  if (!pageVisible) {
    stopAnimation();
    return;
  }

  scheduleAnimation();
};

const handleReducedMotionChange = (event: MediaQueryListEvent): void => {
  supportsReducedMotion = event.matches;

  if (supportsReducedMotion) {
    stopAnimation();
  }

  drawFrame();
  scheduleAnimation();
};

onMounted(() => {
  if (!matrixCanvas.value || !matrixRoot.value) {
    return;
  }

  rebuildModel();
  drawFrame();

  reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  supportsReducedMotion = reducedMotionQuery.matches;
  reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

  document.addEventListener("visibilitychange", handleVisibilityChange);

  resizeObserver = new ResizeObserver(() => {
    rebuildModel();
    drawFrame();
    scheduleAnimation();
  });
  resizeObserver.observe(matrixRoot.value);

  intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      isInViewport = entry?.isIntersecting ?? true;

      if (!isInViewport) {
        stopAnimation();
        return;
      }

      scheduleAnimation();
    },
    {
      root: null,
      threshold: 0,
    },
  );
  intersectionObserver.observe(matrixRoot.value);

  themeObserver = new MutationObserver(() => {
    if (!model) {
      return;
    }

    refreshModelColors(model);
    drawFrame();
  });
  themeObserver.observe(document.documentElement, {
    attributeFilter: ["class", "style"],
    attributes: true,
  });

  scheduleAnimation();
});

watch(
  () => props.matrixSpeed,
  () => {
    if (getSpeed() <= 0) {
      stopAnimation();
      drawFrame();
      return;
    }

    scheduleAnimation();
  },
);

watch(
  () => [
    props.mutationProbability,
    props.spreadSpeed,
    props.lightUpDuration,
    props.darkDownDuration,
  ],
  () => {
    if (!model) {
      return;
    }

    model.config = getConfigFromProps();
  },
);

onBeforeUnmount(() => {
  stopAnimation();

  resizeObserver?.disconnect();
  resizeObserver = null;

  intersectionObserver?.disconnect();
  intersectionObserver = null;

  if (reducedMotionQuery) {
    reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
    reducedMotionQuery = null;
  }

  themeObserver?.disconnect();
  themeObserver = null;

  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<style scoped>
.matrix-root {
  position: absolute;
  inset: 0;

  z-index: 0;

  pointer-events: none;
}

.matrix-root::after {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--bg);
  opacity: 0.6;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.matrix-field {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
