<template>
  <section class="hero-scene" aria-label="BITNP Slogan">
    <div class="hero-content">
      <img class="hero-slogan" :src="sloganImage" alt="BITNP Slogan" loading="eager" />
    </div>
  </section>
</template>

<script setup lang="ts">
import sloganImage from "@/assets/BITNP Slogan.orange.svg";
</script>

<style scoped>
.hero-scene {
  position: relative;
  isolation: isolate;
  overflow: clip;
  display: grid;
  place-items: center;
  min-height: 100vh;
  min-height: 100dvh;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(0.8rem, 2vw, 1.3rem);
  justify-items: center;
  text-align: center;
  width: min(100%, 1120px);
}

.hero-kicker {
  margin: 0;
  color: rgba(var(--text-rgb), 0.76);
  letter-spacing: 0.42em;
  font-family: "Inter", "Segoe UI", sans-serif;
  font-size: clamp(0.68rem, 1vw, 0.82rem);
  text-transform: uppercase;
}

.hero-slogan {
  width: min(100%, 1120px);
  height: auto;
  display: block;
}

.hero-subtitle {
  margin: 0;
  color: color-mix(in srgb, var(--text) 84%, var(--accent) 16%);
  font-family: "Mozilla Headline", "Inter", "Segoe UI", sans-serif;
  font-size: clamp(0.92rem, 2.1vw, 1.4rem);
  letter-spacing: 0.08em;
}
</style>
