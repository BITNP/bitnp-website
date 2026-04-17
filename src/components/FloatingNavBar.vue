<template>
  <header
    ref="navEl"
    class="floating-nav"
    :class="{
      'floating-nav--expanded': expanded,
      'floating-nav--menu-open': menuOpen,
    }"
    :aria-label="ariaLabel"
  >
    <a href="/" class="floating-nav-logo">
      <img :src="LogoImage" alt="BITNP Logo" />
    </a>

    <button
      type="button"
      class="floating-nav-toggle"
      :aria-expanded="menuOpen"
      :aria-controls="dropdownId"
      :aria-label="menuOpen ? 'Collapse navigation links' : 'Expand navigation links'"
      @click="toggleMenu"
    >
      <span class="floating-nav-toggle-icon" aria-hidden="true">
        <span
          class="floating-nav-toggle-bar"
          :class="{ 'floating-nav-toggle-bar--top-open': menuOpen }"
        />
        <span
          class="floating-nav-toggle-bar"
          :class="{ 'floating-nav-toggle-bar--bottom-open': menuOpen }"
        />
      </span>
    </button>

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

    <nav
      :id="dropdownId"
      class="floating-nav-dropdown"
      :aria-label="ariaLabel"
      :aria-hidden="!menuOpen"
    >
      <a
        v-for="item in items"
        :key="`mobile-${item.label}`"
        class="floating-nav-link"
        :href="item.href"
        :tabindex="menuOpen ? 0 : -1"
        target="_blank"
        rel="noopener noreferrer"
        @click="closeMenu"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import LogoImage from "@/assets/BITNP Logo.svg";

export interface FloatingNavItem {
  href: string;
  label: string;
}

const props = withDefaults(
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

const dropdownId: string = "floating-nav-dropdown";

const navEl = ref<HTMLElement | null>(null);
const menuOpen = ref<boolean>(false);

const closeMenu = (): void => {
  menuOpen.value = false;
};

const toggleMenu = (): void => {
  menuOpen.value = !menuOpen.value;
};

const handleDocumentClick = (event: MouseEvent): void => {
  if (!menuOpen.value) {
    return;
  }

  const eventTarget = event.target;

  if (!(eventTarget instanceof Node)) {
    return;
  }

  if (navEl.value?.contains(eventTarget)) {
    return;
  }

  closeMenu();
};

const handleDocumentKeydown = (event: KeyboardEvent): void => {
  if (event.key !== "Escape") {
    return;
  }

  closeMenu();
};

watch(
  () => props.expanded,
  (isExpanded: boolean): void => {
    if (!isExpanded) {
      closeMenu();
    }
  },
);

onMounted((): void => {
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleDocumentKeydown);
});

onBeforeUnmount((): void => {
  document.removeEventListener("click", handleDocumentClick);
  document.removeEventListener("keydown", handleDocumentKeydown);
});
</script>

<style scoped>
.floating-nav {
  --inner-height: 44px;
  --inner-padding: 4px;
  --outer-padding: 8px;
  --outer-radius: calc(var(--inner-height) / 2 + var(--outer-padding));

  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 12px);
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  width: min(88vw, 1024px);
  box-sizing: border-box;

  z-index: 30;
  transition:
    width 240ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-radius 220ms ease;

  padding: var(--outer-padding);
  border-radius: var(--outer-radius);
  border: 1px solid var(--border);

  background: rgba(var(--white-rgb), 0.9);

  backdrop-filter: blur(14px) saturate(1.2);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
}

.floating-nav-toggle {
  display: none;
  align-items: center;
  justify-content: center;

  width: var(--inner-height);
  height: var(--inner-height);
  padding: 0;
  border: 1px solid rgba(var(--white-rgb), 0.62);
  border-radius: var(--outer-radius);

  background: rgba(var(--white-rgb), 0.72);
  cursor: pointer;

  transition:
    background-color 180ms ease,
    border-color 180ms ease;
}

.floating-nav-toggle:hover {
  background: rgba(var(--white-rgb), 0.95);
  border-color: rgba(var(--neutral-rgb), 0.5);
}

.floating-nav-toggle:focus-visible {
  outline: 2px solid rgba(var(--text-rgb), 0.74);
  outline-offset: 2px;
}

.floating-nav-toggle-icon {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.floating-nav-toggle-bar {
  width: 16px;
  height: 2px;
  border-radius: 999px;
  background: rgba(var(--text-rgb), 0.86);
  transform-origin: center;

  transition:
    transform 180ms ease,
    opacity 180ms ease;
}

.floating-nav-toggle-bar--top-open {
  transform: translateY(3.5px) rotate(45deg);
}

.floating-nav-toggle-bar--bottom-open {
  transform: translateY(-3.5px) rotate(-45deg);
}

.floating-nav-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: var(--inner-height);
  height: var(--inner-height);
  padding: 8px;
  box-sizing: border-box;
  border-radius: var(--outer-radius);
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

.floating-nav-dropdown {
  display: none;
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

  min-height: var(--inner-height);
  box-sizing: border-box;
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
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: min(92vw, 1024px);
  }

  .floating-nav-inner {
    display: none;
  }

  .floating-nav-toggle {
    display: inline-flex;
  }

  .floating-nav-dropdown {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    gap: var(--inner-padding);

    max-height: 0;
    opacity: 0;

    overflow: hidden;
    pointer-events: none;
    transform: translateY(-4px);

    transition:
      max-height 220ms ease,
      opacity 180ms ease,
      transform 220ms ease;
  }

  .floating-nav--menu-open .floating-nav-dropdown {
    max-height: 360px;
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    margin-top: var(--outer-padding);
  }

  .floating-nav-dropdown .floating-nav-link {
    min-height: var(--inner-height);
    justify-content: flex-start;
    padding: 0.45rem 0.9rem;
    border: 1px solid rgba(var(--neutral-rgb), 0.22);
    background: rgba(var(--white-rgb), 0.72);
  }

  .floating-nav-dropdown .floating-nav-link:hover {
    background: rgba(var(--white-rgb), 0.95);
    border-color: rgba(var(--neutral-rgb), 0.38);
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-nav,
  .floating-nav-enter-active,
  .floating-nav-leave-active {
    transition: none;
  }

  .floating-nav-toggle-bar,
  .floating-nav-dropdown,
  .floating-nav-link {
    transition: none;
  }
}
</style>
