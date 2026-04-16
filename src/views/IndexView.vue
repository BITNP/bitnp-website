<template>
  <div class="index-page">
    <div class="matrix-global" aria-hidden="true">
      <AsciiMatrixBackground :matrix-speed="0.9" :mutation-probability="0.1" :spread-speed="0.95" />
    </div>

    <Transition name="floating-nav">
      <FloatingNavBar
        v-show="isNavVisible"
        :aria-label="indexPageNavContent.ariaLabel"
        :items="indexPageNavContent.items"
        :expanded="isNavVisible"
      />
    </Transition>

    <main class="index-content">
      <div class="hero-wrapper" :style="heroStyle">
        <div class="fullsize">
          <IndexSloganView />
        </div>
      </div>

      <IndexIntroView />
      <IndexShowcaseView />
      <IndexNewsView />
      <TextScroll text="NetPioneer" />
      <IndexFooterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import AsciiMatrixBackground from "@/components/AsciiMatrixBackground.vue";
import FloatingNavBar from "@/components/FloatingNavBar.vue";
import indexPageNavContent from "@/pages/index/nav.json";
import IndexFooterView from "@/views/IndexFooterView.vue";
import IndexIntroView from "@/views/IndexIntroView.vue";
import IndexNewsView from "@/views/IndexNewsView.vue";
import IndexShowcaseView from "@/views/IndexShowcaseView.vue";
import IndexSloganView from "@/views/IndexSloganView.vue";
import TextScroll from "@/components/TextScroll.vue";

const navRevealScrollY: number = 48;

const scrollY = ref<number>(0);
const prefersReducedMotion = ref<boolean>(false);

let animationFrameId: number | null = null;
let reducedMotionQuery: MediaQueryList | null = null;

const heroOffset = computed<number>(() => {
  if (prefersReducedMotion.value) {
    return 0;
  }

  return Math.max(-192, scrollY.value * -0.25);
});

const isNavVisible = computed<boolean>(() => scrollY.value > navRevealScrollY);

const heroStyle = computed<Record<string, string>>(() => ({
  transform: `translate3d(0, ${heroOffset.value}px, 0)`,
}));

const syncScroll = (): void => {
  scrollY.value = window.scrollY;
  animationFrameId = null;
};

const handleScroll = (): void => {
  if (animationFrameId !== null) {
    return;
  }

  animationFrameId = window.requestAnimationFrame(syncScroll);
};

const handleReducedMotionChange = (event: MediaQueryListEvent): void => {
  prefersReducedMotion.value = event.matches;
  scrollY.value = window.scrollY;
};

onMounted(() => {
  reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  prefersReducedMotion.value = reducedMotionQuery.matches;

  reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

  scrollY.value = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  window.removeEventListener("scroll", handleScroll);
  reducedMotionQuery?.removeEventListener("change", handleReducedMotionChange);
});
</script>

<style scoped>
.index-page {
  position: relative;
  min-height: 100vh;
  isolation: isolate;
  background: rgba(var(--bg-rgb), 0.68);
}

.matrix-global {
  position: fixed;
  inset: 0;

  z-index: 0;
  opacity: 0.8;

  pointer-events: none;
  transition: transform 220ms ease-out;
  will-change: transform;
}

.index-content {
  position: relative;
  z-index: 1;
}

.hero-wrapper {
  transition: transform 220ms ease-out;
  will-change: transform;
}

.fullsize {
  width: 100%;
  height: 100vh;
}

.fullsize > :deep(*) {
  height: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .matrix-global,
  .hero-wrapper {
    transition: none;
  }
}
</style>
