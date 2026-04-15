<template>
  <header
    class="floating-nav"
    :class="{
      'floating-nav--expanded': expanded,
    }"
    :aria-label="ariaLabel"
  >
    <a href="/" class="floating-nav-logo">
      <img :src="LogoImage" alt="BITNP Logo" />
    </a>
    <nav class="floating-nav-inner">
      <a
        v-for="item in items"
        :key="item.label"
        class="floating-nav-link"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import LogoImage from "@/assets/BITNP Logo.svg";

export interface FloatingNavItem {
  href: string;
  label: string;
}

withDefaults(
  defineProps<{
    ariaLabel?: string;
    items: readonly FloatingNavItem[];
    expanded?: boolean;
  }>(),
  {
    ariaLabel: "Homepage links",
    expanded: false,
  },
);
</script>

<style scoped>
.floating-nav {
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 12px);
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 8px;

  width: min(88vw, 620px);

  z-index: 30;
  transition: width 240ms cubic-bezier(0.2, 0.7, 0.2, 1);

  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);

  background: rgba(var(--white-rgb), 0.9);

  backdrop-filter: blur(14px) saturate(1.2);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
}

.floating-nav--expanded {
  width: min(94vw, 1020px);
}

.floating-nav-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 999px;
  border: 1px solid rgba(var(--white-rgb), 0.62);

  background: rgba(var(--white-rgb), 0.72);
  text-decoration: none;

  transition:
    background-color 180ms ease,
    border-color 180ms ease;

  z-index: 100;
}

.floating-nav-logo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.floating-nav-logo:hover {
  background: rgba(var(--white-rgb), 0.95);
  border: 1px solid rgba(var(--neutral-rgb), 0.5);
}

.floating-nav-logo:focus-visible {
  outline: 2px solid rgba(var(--text-rgb), 0.74);
  outline-offset: 2px;
}

.floating-nav-inner {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

@supports not (backdrop-filter: blur(14px)) {
  .floating-nav-inner {
    background: rgba(var(--bg-rgb), 0.88);
  }
}

.floating-nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 2rem;
  padding: 0.25rem 1rem;
  border: 1px solid transparent;
  border-radius: 999px;

  color: var(--text);
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;

  transition:
    background-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.floating-nav-link:hover {
  color: var(--text);
  background: rgba(var(--white-rgb), 0.95);
  border: rgba(var(--neutral-rgb), 0.4) 1px solid;
  transition:
    background-color 180ms ease,
    color 180ms ease,
    border-color 180ms ease;
}

.floating-nav-link:focus-visible {
  outline: 2px solid rgba(var(--text-rgb), 0.74);
  outline-offset: 2px;
}

.floating-nav-enter-active,
.floating-nav-leave-active {
  transition:
    opacity 240ms cubic-bezier(0.2, 0.7, 0.2, 1),
    transform 240ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.floating-nav-enter-from,
.floating-nav-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-12px) scaleX(0.75);
}

.floating-nav-enter-to,
.floating-nav-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scaleX(1);
}

@media (max-width: 768px) {
  .floating-nav {
    width: min(86vw, 540px);
  }

  .floating-nav--expanded {
    width: min(96vw, 720px);
  }

  .floating-nav-inner {
    flex-wrap: nowrap;

    overflow-x: auto;
    scrollbar-width: none;
    overflow-y: hidden;
  }

  .floating-nav-inner::-webkit-scrollbar {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-nav,
  .floating-nav-enter-active,
  .floating-nav-leave-active {
    transition: none;
  }

  .floating-nav-link {
    transition: none;
  }
}
</style>
