<template>
  <section
    :id="showcaseContent.sectionId"
    class="showcase-section"
    :aria-label="showcaseContent.ariaLabel"
  >
    <div class="showcase-container">
      <header class="showcase-header">
        <p class="showcase-kicker">{{ showcaseContent.kicker }}</p>
        <h2 class="showcase-title">{{ showcaseContent.title }}</h2>
        <p class="showcase-lead">{{ showcaseContent.lead }}</p>
      </header>

      <div class="showcase-grid">
        <article
          v-for="card in safeCards"
          :key="card.id"
          class="showcase-card"
          :class="[
            `showcase-card--${card.size}`,
            { 'showcase-card--decorated': !!card.decorateImageSrc },
          ]"
        >
          <div class="showcase-card-body">
            <img
              v-if="card.decorateImageSrc"
              class="card-decorate"
              :src="card.decorateImageSrc"
              alt=""
              aria-hidden="true"
            />

            <div class="card-content">
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-description">{{ card.description }}</p>
              <div class="card-actions" role="list" :aria-label="`${card.title} links`">
                <a
                  v-for="(link, index) in card.links"
                  :key="`${card.id}-link-${index}`"
                  class="card-action-link"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`${card.title}，${link.label}`"
                  role="listitem"
                >
                  {{ link.label }} ->
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import showcaseContentJson from "@/pages/index/showcase.json";

type CardSize = "big" | "small";

interface ShowcaseCardLink {
  href: string;
  label: string;
}

interface ShowcaseCardSpec {
  decorateImageSrc?: string;
  description: string;
  id: string;
  links: readonly ShowcaseCardLink[];
  size: CardSize;
  title: string;
}

interface RawShowcaseCardLink {
  href?: string;
  label?: string;
}

interface RawShowcaseCardSpec {
  ctaLabel?: string;
  decorateImage?: string;
  description?: string;
  href?: string;
  id?: string;
  links?: readonly RawShowcaseCardLink[];
  size?: string;
  title?: string;
}

interface ShowcaseContent {
  ariaLabel: string;
  cards: readonly ShowcaseCardSpec[];
  kicker: string;
  lead: string;
  sectionId: string;
  title: string;
}

interface RawShowcaseContent {
  ariaLabel?: string;
  cards?: readonly RawShowcaseCardSpec[];
  kicker?: string;
  lead?: string;
  sectionId?: string;
  title?: string;
}

const rawShowcaseContent = showcaseContentJson as RawShowcaseContent;
const decorateImageMap = import.meta.glob<string>("/src/assets/*.{svg,png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const normalizeCardSize = (size: string | undefined): CardSize => {
  return size === "big" ? "big" : "small";
};

const normalizeCardLinks = (card: RawShowcaseCardSpec): readonly ShowcaseCardLink[] => {
  const sourceLinks = Array.isArray(card.links) ? card.links : [];

  const normalizedLinks = sourceLinks
    .map((link) => {
      const href = link.href?.trim();

      if (!href) {
        return null;
      }

      return {
        href,
        label: link.label?.trim() || "Open",
      };
    })
    .filter((link): link is ShowcaseCardLink => link !== null);

  if (normalizedLinks.length > 0) {
    return normalizedLinks;
  }

  return [
    {
      href: card.href?.trim() || "https://bitnp.net",
      label: card.ctaLabel?.trim() || "Open",
    },
  ];
};

const normalizeCards = (
  cards: readonly RawShowcaseCardSpec[] | undefined,
): readonly ShowcaseCardSpec[] => {
  const sourceCards = Array.isArray(cards) ? cards : [];

  return sourceCards.map((card, index) => {
    const safeId = card.id?.trim() || `service-${index + 1}`;
    const safeSize = normalizeCardSize(card.size);
    const decorateImagePath = card.decorateImage?.trim();
    const decorateImageSrc =
      safeSize === "big" && decorateImagePath ? decorateImageMap[decorateImagePath] : undefined;

    return {
      decorateImageSrc,
      description: card.description?.trim() || "Service overview",
      id: safeId,
      links: normalizeCardLinks(card),
      size: safeSize,
      title: card.title?.trim() || safeId,
    };
  });
};

const fallbackCards: readonly ShowcaseCardSpec[] = [
  {
    description: "Service overview",
    id: "service-fallback",
    links: [{ href: "https://bitnp.net", label: "Open" }],
    size: "big",
    title: "Service",
  },
];

const normalizedCards = normalizeCards(rawShowcaseContent.cards);
const safeCards = normalizedCards.length > 0 ? normalizedCards : fallbackCards;

const showcaseContent: ShowcaseContent = {
  ariaLabel: rawShowcaseContent.ariaLabel?.trim() || "服务展示",
  cards: safeCards,
  kicker: rawShowcaseContent.kicker?.trim() || "Services",
  lead: rawShowcaseContent.lead?.trim() || "校园技术服务",
  sectionId: rawShowcaseContent.sectionId?.trim() || "showcase",
  title: rawShowcaseContent.title?.trim() || "服务",
};
</script>

<style scoped>
.showcase-section {
  position: relative;
  z-index: 1;

  padding: 3rem 24px;
  background: rgba(var(--bg-rgb), 0.8);
}

.showcase-container {
  margin: 0 auto;
  max-width: 1024px;
  box-sizing: border-box;
}

.showcase-header {
  margin: 0 0 24px;
}

.showcase-kicker {
  margin: 0 0 10px;

  color: var(--text-muted);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.showcase-title {
  margin: 0;

  color: var(--text-strong);
  font-size: clamp(32px, 5.2vw, 50px);
  font-weight: 600;
  line-height: 0.96;
  font-family:
    "Mozilla Headline", "Inter", "Helvetica Neue", "Chill Organic", "Segoe UI", sans-serif;
}

.showcase-lead {
  margin: 12px 0 0;
  max-width: 62ch;

  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.64;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.showcase-card {
  position: relative;

  min-height: 208px;
  border: 1px solid var(--border);
  border-radius: 18px;

  overflow: clip;
  background: var(--surface);
}

.showcase-card--big {
  grid-column: span 2;
}

.showcase-card--small {
  grid-column: span 1;
}

.showcase-card-body {
  position: relative;

  display: flex;
  align-items: stretch;

  min-height: 100%;

  color: var(--text);
}

.card-decorate {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;

  width: min(30%, 240px);
  height: auto;

  opacity: 0.48;
  pointer-events: none;
  user-select: none;
}

.ascii-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.card-content {
  position: relative;
  z-index: 1;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;

  min-height: 100%;
  padding: 20px;
  box-sizing: border-box;

  backdrop-filter: blur(0.2px);
  -webkit-backdrop-filter: blur(0.2px);
}

.showcase-card--decorated .card-content {
  padding-right: clamp(120px, 26%, 210px);
  padding-bottom: 26px;
}

.card-title {
  margin: 0;

  color: var(--text-strong);
  font-size: clamp(22px, 2.8vw, 34px);
  font-weight: 650;
  line-height: 1.05;
  font-family: "Mozilla Headline", "Inter", "Helvetica Neue", "Segoe UI", sans-serif;
}

.card-description {
  margin: 0;
  max-width: 46ch;

  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.62;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: auto;
}

.card-action-link {
  display: inline-flex;
  align-items: center;

  border-radius: 8px;
  padding: 4px 8px;

  color: var(--text-accent);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  transition:
    color 180ms ease,
    background-color 180ms ease;
}

.card-action-link:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

@media (hover: hover) and (pointer: fine) {
  .card-action-link:hover {
    background: var(--surface-accent);
  }
}

@media (max-width: 900px) {
  .showcase-section {
    padding: 20px 16px;
  }

  .showcase-grid {
    grid-template-columns: 1fr;
  }

  .showcase-card--big,
  .showcase-card--small {
    grid-column: auto;
  }

  .showcase-card {
    min-height: 220px;
  }

  .card-decorate {
    width: min(46%, 180px);
    opacity: 0.42;
  }

  .showcase-card--decorated .card-content {
    padding-right: clamp(96px, 32%, 156px);
    padding-bottom: 24px;
  }

  .ascii-bg {
    inset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card-action-link {
    transition: none;
  }
}
</style>
