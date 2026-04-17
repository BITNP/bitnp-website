<template>
  <footer class="index-footer">
    <div class="footer-container">
      <div class="card introduction">
        <img :src="logoImage" alt="BITNP Logo" width="48" height="48" />
        <strong>{{ introduction.title }}</strong>
        <p>{{ introduction.subtitle }}</p>
        <p>{{ introduction.body }}</p>
        <p class="copyright">{{ introduction.copyright }}</p>
      </div>
      <div class="card links">
        <h2>{{ contactUs.title }}</h2>
        <ul>
          <li v-for="contact in contactUs.contacts" :key="contact.label">
            <a :href="contact.href" v-if="contact.href" target="_blank" rel="noopener noreferrer">
              <Icon>
                <LinkOutlined />
              </Icon>
              {{ contact.label }}
            </a>
            <span v-else>{{ contact.label }}</span>
          </li>
        </ul>
      </div>
      <div class="card join">
        <h2>{{ joinUs.title }}</h2>
        <p>{{ joinUs.body }}</p>
        <a
          v-if="!joinUs.disabled"
          :href="joinUs.actionHref"
          class="card-action"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ joinUs.actionLabel }}
        </a>
        <span v-else class="card-action is-disabled" aria-disabled="true">
          {{ joinUs.disabledActionLabel }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import indexPageFooterContent from "@/pages/index/footer.json";
import logoImage from "@/assets/BITNP Logo.svg";
import { Icon } from "@vicons/utils";
import { LinkOutlined } from "@vicons/material";

interface FooterJoin {
  title: string;
  body: string;
  actionLabel: string;
  actionHref: string;
  disabled: boolean;
  disabledActionLabel: string;
}

const introduction = indexPageFooterContent.introduction;
const contactUs = indexPageFooterContent.contact;
const joinUs: FooterJoin = indexPageFooterContent.join;
</script>

<style scoped>
.index-footer {
  position: relative;
  z-index: 1;

  padding: 3rem 24px;

  border-top: 1px solid rgba(var(--white-rgb), 0.38);
  background: rgba(var(--white-rgb), 0.08);
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  margin: 0 auto;
  max-width: 1024px;
  box-sizing: border-box;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0;
  padding: 24px 22px;
  min-height: 220px;

  border: 1px solid var(--border);
  border-radius: 16px;

  background: var(--surface);
  color: var(--text);
}

.card h2 {
  margin: 0;

  font-size: 2rem;
  font-weight: 600;
  font-family: "Mozilla Headline", "Inter", "Helvetica Neue", "Segoe UI", sans-serif;

  color: var(--text-strong);
}

.card p {
  margin: 0;

  font-size: 15px;
  line-height: 1.6;

  color: var(--text-muted);
}

.card.introduction {
  justify-content: flex-start;
}

.card.introduction strong {
  font-weight: 640;
  line-height: 1;
}

.card.introduction p + p {
  margin-top: 2px;
}

.card.introduction .copyright {
  margin-top: 12px;
  font-weight: 500;
  font-size: 12px;
  color: var(--text-muted);
}

.links ul {
  display: grid;
  gap: 4px;

  margin: 0;
  padding: 0;

  list-style: none;
}

.links li {
  margin: 0;
}

.links a,
.links span {
  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding: 4px 0;

  font-size: 15px;
  line-height: 1.4;
}

.links a {
  border-radius: 8px;
  padding: 4px 8px;

  text-decoration: none;

  color: var(--text-accent);

  transition:
    color 180ms ease,
    background-color 180ms ease;
}

.links a:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

.join {
  gap: 12px;
}

.card-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  margin-top: auto;

  font-size: 16px;
  padding: 1rem 2rem;

  border: 2px solid rgba(var(--text-rgb), 0.4);
  border-radius: 999px;

  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  color: rgb(var(--white-rgb));
  background: var(--text);

  transition:
    transform 180ms ease,
    background-color 180ms ease;

  cursor: pointer;
}

.card-action.is-disabled {
  border-color: rgba(var(--text-rgb), 0.24);

  color: var(--text-muted);
  background: rgba(var(--text-rgb), 0.08);

  cursor: not-allowed;
}

.card-action:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
}

.card-action:active {
  transform: translateY(1px) scale(0.98);
}

@media (max-width: 900px) {
  .index-footer {
    padding: 20px 0 28px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 0 16px;
  }

  .card {
    min-height: auto;
    padding: 20px;
  }
}

@media (hover: hover) and (pointer: fine) {
  .links a:hover {
    background: var(--surface-accent);
  }

  .card-action:hover {
    background: transparent;
    color: var(--text);
  }

  .card-action.is-disabled:hover {
    color: var(--text-muted);
    background: rgba(var(--text-rgb), 0.08);
  }
}

@media (prefers-reduced-motion: reduce) {
  .links a,
  .card-action {
    transition: none;
  }
}
</style>
