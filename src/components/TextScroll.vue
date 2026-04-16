<template>
  <div ref="containerRef" class="container">
    <span class="sr-only">{{ props.text }}</span>
    <span
      v-for="offset in textOffsets"
      :key="offset"
      class="text"
      :class="offset === 0 ? 'solid' : 'stroke'"
      :style="getTextStyle(offset)"
      aria-hidden="true"
    >
      {{ props.text }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps<{
  text: string;
}>();

const textOffsets: ReadonlyArray<number> = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const maxSpreadRatio: number = 0.6;
const maxSpreadLimitPx: number = 560;
const minStrokeAlphaPercent: number = 1;
const maxStrokeAlphaPercent: number = 20;

const containerRef = ref<HTMLElement | null>(null);
const progress = ref<number>(0);
const prefersReducedMotion = ref<boolean>(false);
const containerWidth = ref<number>(0);
const isIntersecting = ref<boolean>(true);

const maxSpreadPx = computed<number>(() => {
  return Math.min(containerWidth.value * maxSpreadRatio, maxSpreadLimitPx);
});

const stepPx = computed<number>(() => {
  return maxSpreadPx.value / 4;
});

let reducedMotionQuery: MediaQueryList | null = null;
let animationFrameId: number | null = null;
let resizeObserver: ResizeObserver | null = null;
let intersectionObserver: IntersectionObserver | null = null;

type TextStyle = {
  "--x": string;
  "--stroke-color": string;
  "--z-index": string;
};

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(max, Math.max(min, value));
};

const easeOutCubic = (value: number): number => {
  const safeValue = clamp(value, 0, 1);
  return 1 - (1 - safeValue) ** 3;
};

const getStrokeAlphaPercent = (offset: number): number => {
  const normalizedDistance = clamp(Math.abs(offset) / 4, 0, 1);

  return (
    maxStrokeAlphaPercent - normalizedDistance * (maxStrokeAlphaPercent - minStrokeAlphaPercent)
  );
};

const computeProgress = (): number => {
  const element = containerRef.value;

  if (!element) {
    return 0;
  }

  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);

  return clamp(rawProgress, 0, 1);
};

const syncLayoutState = (): void => {
  const element = containerRef.value;

  if (!element) {
    return;
  }

  containerWidth.value = element.clientWidth;
  progress.value = computeProgress();
};

const syncScrollState = (): void => {
  animationFrameId = null;

  if (prefersReducedMotion.value || !isIntersecting.value) {
    return;
  }

  progress.value = computeProgress();
};

const scheduleScrollSync = (): void => {
  if (animationFrameId !== null) {
    return;
  }

  animationFrameId = window.requestAnimationFrame(syncScrollState);
};

const handleReducedMotionChange = (event: MediaQueryListEvent): void => {
  prefersReducedMotion.value = event.matches;

  if (prefersReducedMotion.value) {
    progress.value = 0;
    return;
  }

  syncLayoutState();
};

const getTextStyle = (offset: number): TextStyle => {
  const strokeAlphaPercent = getStrokeAlphaPercent(offset);
  const zIndex = `${10 - Math.abs(offset)}`;

  if (prefersReducedMotion.value) {
    return {
      "--x": "0px",
      "--stroke-color": `color-mix(in srgb, var(--text-strong) ${strokeAlphaPercent}%, transparent)`,
      "--z-index": zIndex,
    };
  }

  const easedProgress = easeOutCubic(progress.value);

  return {
    "--x": `${offset * stepPx.value * easedProgress}px`,
    "--stroke-color": `color-mix(in srgb, var(--text-strong) ${strokeAlphaPercent}%, transparent)`,
    "--z-index": zIndex,
  };
};

onMounted(() => {
  reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  prefersReducedMotion.value = reducedMotionQuery.matches;
  reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

  resizeObserver = new ResizeObserver(() => {
    syncLayoutState();
  });

  if (containerRef.value) {
    resizeObserver.observe(containerRef.value);

    intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersecting.value = entry?.isIntersecting ?? true;

      if (!isIntersecting.value) {
        return;
      }

      scheduleScrollSync();
    });

    intersectionObserver.observe(containerRef.value);
  }

  syncLayoutState();
  window.addEventListener("scroll", scheduleScrollSync, { passive: true });
});

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  window.removeEventListener("scroll", scheduleScrollSync);

  if (reducedMotionQuery) {
    reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
    reducedMotionQuery = null;
  }

  resizeObserver?.disconnect();
  resizeObserver = null;

  intersectionObserver?.disconnect();
  intersectionObserver = null;
});
</script>

<style lang="css" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 20vh;
  overflow: hidden;

  background: var(--bg);
}

.text {
  --x: 0px;
  --z-index: 1;

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: var(--z-index);
  transform: translate3d(-50%, -50%, 0) translate3d(var(--x), 0, 0);
  will-change: transform;

  font-size: min(15vw, 8em);
  font-weight: bold;

  font-family: "Mozilla Headline", "Inter", system-ui;
  user-select: none;
}

.solid {
  background: rgba(var(--bg-rgb), 0.8);
  color: var(--text-strong);
}

.stroke {
  color: var(--bg);
  text-shadow:
    var(--stroke-color) 2px 0 0,
    var(--stroke-color) -2px 0 0,
    var(--stroke-color) 0 2px 0,
    var(--stroke-color) 0 -2px 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;

  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (prefers-reduced-motion: reduce) {
  .text {
    transition: none;
  }
}
</style>
