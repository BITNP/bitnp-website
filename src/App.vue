<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: min(100dvh, 100vh);
  width: min(100dvw, 100vw);
  font-family: "Inter", "Helvetica Neue", "Segoe UI", sans-serif;
  font-weight: 600;

  text-autospace: normal;
}

:root {
  --bg: rgb(255, 253, 241);
  --bg-rgb: 255, 253, 241;
  --accent: rgb(255, 150, 68);
  --accent-rgb: 255, 150, 68;

  --text: #222222;
  --text-rgb: 34, 34, 34;
  --text-strong: rgb(86, 47, 0);
  --text-muted: rgba(var(--text-rgb), 0.62);
  --text-accent: var(--accent);

  --white-rgb: 255, 255, 255;
  --neutral-rgb: 200, 200, 200;

  --border: rgba(var(--neutral-rgb), 0.5);
  --hero-shift: 0px;
  --hero-glow: 0;
  --ring: rgba(var(--bg-rgb), 0.95);

  --surface: rgba(var(--white-rgb), 0.88);
  --surface-accent: rgba(var(--accent-rgb), 0.1);
}
</style>
