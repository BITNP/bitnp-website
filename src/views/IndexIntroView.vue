<template>
  <div ref="pageShell" class="view-shell">
    <div class="layout-container">
      <section class="main-layout">
        <nav
          ref="railEl"
          class="section-nav"
          :aria-label="indexPageIntroContent.sectionsAriaLabel"
          @keydown="handleRailKeydown"
        >
          <button
            v-for="section in safeSections"
            :key="section.id"
            type="button"
            class="section-nav-item"
            :class="{ active: section.id === activeSection }"
            :aria-current="section.id === activeSection ? 'page' : undefined"
            :tabindex="section.id === activeSection ? 0 : -1"
            :ref="(el) => setRailButtonRef(section.id, el)"
            @click="handleSectionClick(section.id)"
          >
            {{ section.navLabel }}
          </button>
        </nav>

        <article ref="contentPanelEl" class="content-panel">
          <div class="content-panel-body">
            <p class="hero-kicker">{{ indexPageIntroContent.kicker }}</p>
            <h1>{{ activeContent.title }}</h1>
            <p class="hero-lead">{{ activeContent.lead }}</p>
            <p
              v-for="(paragraph, paragraphIndex) in activeContent.body"
              :key="`${activeContent.id}-${paragraphIndex}`"
              class="hero-copy"
            >
              {{ paragraph }}
            </p>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import type { ComponentPublicInstance } from "vue";
import indexPageIntroContent from "@/pages/index/intro.json";

import "@/styles/chillOrganic.css";
import "@/styles/chillInorganic.css";

interface SectionSpec {
  id: string;
  navLabel: string;
  title: string;
  lead: string;
  body: readonly string[];
}

interface RawSectionSpec {
  id?: string;
  navLabel?: string;
  title?: string;
  lead?: string;
  body?: string | readonly string[];
}

interface IndexIntroViewExposed {
  setHeroEffect: (shift: number, glow: number) => void;
}

const fallbackSection: SectionSpec = {
  id: "default",
  navLabel: "Default",
  title: "No Content",
  lead: "Add sections in src/content/pages/index.json.",
  body: ["No section content available."],
};

const normalizeBody = (body: RawSectionSpec["body"]): readonly string[] => {
  if (Array.isArray(body)) {
    const paragraphs = body
      .map((paragraph) => paragraph.trim())
      .filter((paragraph) => paragraph.length > 0);
    return paragraphs.length > 0 ? paragraphs : fallbackSection.body;
  }

  if (typeof body === "string") {
    const paragraph = body.trim();
    return paragraph.length > 0 ? [paragraph] : fallbackSection.body;
  }

  return fallbackSection.body;
};

const normalizeSections = (rawSections: readonly RawSectionSpec[]): readonly SectionSpec[] => {
  const usedSectionIds = new Set<string>();

  return rawSections.map((section, index) => {
    const baseId =
      section.id?.trim() ||
      section.navLabel?.trim() ||
      section.title?.trim() ||
      `section-${index + 1}`;

    let id = baseId;
    let dedupeCursor = 2;

    while (usedSectionIds.has(id)) {
      id = `${baseId}-${dedupeCursor}`;
      dedupeCursor += 1;
    }

    usedSectionIds.add(id);

    return {
      id,
      navLabel: section.navLabel?.trim() || `Section ${index + 1}`,
      title: section.title?.trim() || section.navLabel?.trim() || `Section ${index + 1}`,
      lead: section.lead?.trim() || "",
      body: normalizeBody(section.body),
    };
  });
};

const rawSections: readonly RawSectionSpec[] = Array.isArray(indexPageIntroContent.sections)
  ? indexPageIntroContent.sections
  : [];
const sections: readonly SectionSpec[] = normalizeSections(rawSections);
const activeSection = ref<string>(sections[0]?.id ?? fallbackSection.id);
const pageShell = ref<HTMLElement | null>(null);
const railEl = ref<HTMLElement | null>(null);
const contentPanelEl = ref<HTMLElement | null>(null);
const railButtons = ref<Partial<Record<string, HTMLButtonElement>>>({});
const prefersReducedMotion = ref<boolean>(false);
const lastInteraction = ref<"pointer" | "keyboard" | "programmatic">("programmatic");

const safeSections = computed<readonly SectionSpec[]>(() =>
  sections.length > 0 ? sections : [fallbackSection],
);

const activeContent = computed<SectionSpec>(() => {
  const matched = safeSections.value.find((section) => section.id === activeSection.value);
  return matched ?? safeSections.value[0] ?? fallbackSection;
});

const activeIndex = computed<number>(() =>
  safeSections.value.findIndex((section) => section.id === activeSection.value),
);

const setActiveByIndex = (index: number, options?: { focus?: boolean }): void => {
  const total = safeSections.value.length;

  if (total === 0) {
    return;
  }

  const safeIndex = ((index % total) + total) % total;
  const targetSection = safeSections.value[safeIndex] ?? safeSections.value[0] ?? fallbackSection;
  activeSection.value = targetSection.id;

  if (options?.focus) {
    void nextTick(() => {
      focusActiveRailButton();
    });
  }
};

const handleSectionClick = (sectionId: string): void => {
  lastInteraction.value = "pointer";
  activeSection.value = sectionId;
};

const handleRailKeydown = (event: KeyboardEvent): void => {
  const lastIndex = safeSections.value.length - 1;

  switch (event.key) {
    case "ArrowUp":
    case "ArrowLeft":
      event.preventDefault();
      lastInteraction.value = "keyboard";
      setActiveByIndex(activeIndex.value - 1, { focus: true });
      break;
    case "ArrowDown":
    case "ArrowRight":
      event.preventDefault();
      lastInteraction.value = "keyboard";
      setActiveByIndex(activeIndex.value + 1, { focus: true });
      break;
    case "Home":
      event.preventDefault();
      lastInteraction.value = "keyboard";
      setActiveByIndex(0, { focus: true });
      break;
    case "End":
      event.preventDefault();
      lastInteraction.value = "keyboard";
      setActiveByIndex(lastIndex, { focus: true });
      break;
    default:
      break;
  }
};

const setRailButtonRef = (
  sectionId: string,
  el: Element | ComponentPublicInstance | null,
): void => {
  if (el instanceof HTMLButtonElement) {
    railButtons.value[sectionId] = el;
  }
};

const focusActiveRailButton = (): void => {
  const activeButton = railButtons.value[activeSection.value];

  if (!activeButton) {
    return;
  }

  activeButton.focus();
};

const setHeroEffect = (shift: number, glow: number): void => {
  if (!pageShell.value) {
    return;
  }

  pageShell.value.style.setProperty("--hero-shift", `${shift}px`);
  pageShell.value.style.setProperty("--hero-glow", `${glow}`);
};

watch(activeSection, async () => {
  await nextTick();

  if (lastInteraction.value === "pointer") {
    contentPanelEl.value?.scrollIntoView({
      behavior: prefersReducedMotion.value ? "auto" : "smooth",
      block: "nearest",
    });
  }

  lastInteraction.value = "programmatic";
});

if (typeof window !== "undefined") {
  prefersReducedMotion.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

defineExpose<IndexIntroViewExposed>({
  setHeroEffect,
});
</script>

<style scoped>
.view-shell {
  position: relative;
  overflow: hidden;

  background: rgba(var(--accent-rgb), 0.9);
  color: rgb(var(--white-rgb));

  font-size: 16px;
  line-height: 1.5;
}

.view-shell::before {
  position: absolute;
  inset: -15% -20% auto -20%;
  height: 45%;

  background: transparent;

  opacity: var(--hero-glow);
  transform: translateY(calc(var(--hero-shift) * -0.6));
  transition: opacity 200ms ease;

  content: "";
  pointer-events: none;
}

.scroll-container {
  height: 100%;
}

.layout-container {
  margin: 0 auto;
  padding: 24px;
  max-width: 1024px;
}

.main-layout {
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  min-height: 470px;
}

.section-nav {
  position: relative;

  display: flex;
  align-items: stretch;
  gap: 2px;

  padding-right: 24px;
}

.section-nav-item {
  position: relative;
  z-index: 1;
  isolation: isolate;

  width: 52px;
  padding: 0 6px;

  overflow: hidden;
  border: unset;

  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -0.05em;
  line-height: 1;
  text-align: left;
  text-orientation: sideways;
  text-transform: uppercase;
  writing-mode: vertical-rl;

  font-family:
    "Mozilla Headline", "Chill Inorganic", "Inter", "Helvetica Neue", "Segoe UI", sans-serif;
  font-stretch: 120%;

  color: rgba(var(--white-rgb), 0.5);
  background: transparent;

  cursor: pointer;
}

@media (hover: hover) and (pointer: fine) {
  .section-nav-item:hover {
    color: rgb(var(--white-rgb));
  }
}

.section-nav-item:focus-visible,
.section-nav-item.active {
  color: var(--text-strong);
  font-weight: 700;
}

.section-nav-item:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
}

.content-panel {
  padding: 24px;

  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 18px;
  min-height: 330px;
  width: min(100%, 600px);
  box-sizing: border-box;

  background: rgba(var(--white-rgb), 0.9);
  color: var(--text);

  position: relative;
}

.hero-kicker {
  margin: 0;

  font-size: 12px;
  text-transform: uppercase;

  color: var(--text-muted);
}

.content-panel-body h1 {
  margin: 6px 0 10px;

  font-size: clamp(32px, 4vw, 54px);
  font-weight: 650;
  line-height: 0.95;
  color: var(--text-strong);

  font-family:
    "Mozilla Headline", "Chill Organic", "Inter", "Helvetica Neue", "Segoe UI", sans-serif;
}

.hero-lead {
  margin: 0 0 8px;
  max-width: 42ch;

  font-size: 15px;
  font-weight: 700;

  color: var(--text);
}

.hero-copy {
  margin: 0;

  font-size: 15px;
  line-height: 1.65;

  color: var(--text-muted);
}

@media (max-width: 1120px) {
  .layout-container {
    max-width: 980px;
  }

  .main-layout {
    grid-template-columns: 220px minmax(0, 1fr);
    justify-content: space-between;
  }

  .section-nav-item {
    font-size: 2rem;
  }
}

@media (max-width: 900px) {
  .main-layout {
    flex-direction: column;
  }

  .section-nav {
    display: flex;
    gap: 8px;
    padding-bottom: 8px;

    overflow-x: auto;
    border: 0;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
  }

  :global(.section-nav::-webkit-scrollbar) {
    display: none;
  }

  .section-nav-item {
    width: auto;
    min-height: 120px;

    border: none;
    padding: 12px 8px;

    font-size: 2rem;
    text-align: left;

    scroll-snap-align: center;
    text-orientation: sideways;
    writing-mode: vertical-rl;
  }

  .content-panel {
    margin: 0;
    grid-template-columns: 1fr;
    min-height: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-nav-item {
    transition: none;
  }

  .view-shell::before,
  .content-panel::before {
    transition: none;
  }
}
</style>
