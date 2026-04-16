<template>
  <section :id="newsContent.sectionId" class="news-section" :aria-label="newsContent.ariaLabel">
    <div class="news-container">
      <header class="news-header">
        <p class="news-kicker">{{ newsContent.kicker }}</p>
        <div class="news-title-row">
          <h2 class="news-title">{{ newsContent.title }}</h2>

          <nav
            v-if="totalPages > 1"
            class="news-pagination news-pagination--inline"
            aria-label="新闻分页"
          >
            <button
              type="button"
              class="page-button"
              aria-label="上一页"
              :disabled="currentPage <= 1"
              @click="goPreviousPage"
            >
              <Icon><ArrowBackFilled /></Icon>
            </button>
            <span class="sr-only" role="status" aria-live="polite"
              >{{ currentPage }} / {{ totalPages }}</span
            >
            <button
              type="button"
              class="page-button"
              aria-label="下一页"
              :disabled="currentPage >= totalPages"
              @click="goNextPage"
            >
              <Icon><ArrowForwardFilled /></Icon>
            </button>
          </nav>
        </div>
      </header>

      <p v-if="status === 'loading'" class="sr-only" role="status" aria-live="polite">
        正在加载新闻文章
      </p>

      <div v-if="status === 'loading'" class="news-grid" aria-hidden="true">
        <article
          v-for="placeholder in placeholderCount"
          :key="placeholder"
          class="news-card news-card--loading"
        >
          <div class="news-card-content">
            <div class="skeleton skeleton-meta" />
            <div class="skeleton skeleton-title" />
            <div class="skeleton skeleton-body" />
            <div class="skeleton skeleton-body short" />
          </div>
        </article>
      </div>

      <div v-else-if="status === 'error'" class="status-box" role="status" aria-live="polite">
        <p>{{ errorMessage }}</p>
        <button type="button" class="retry-button" @click="void fetchNews()">
          {{ newsContent.retryLabel }}
        </button>
      </div>

      <div v-else-if="status === 'empty'" class="status-box" role="status" aria-live="polite">
        <p>{{ newsContent.emptyLabel }}</p>
      </div>

      <div v-else>
        <div class="news-grid-shell">
          <Transition :name="pageTransitionName" mode="out-in">
            <div :key="currentPage" class="news-grid">
              <article
                v-for="article in pagedArticles"
                :key="`${article.link}-${article.isoDate}`"
                class="news-card"
              >
                <a
                  class="news-card-link"
                  :href="article.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="news-card-content">
                    <div class="news-meta">
                      <time :datetime="article.isoDate">{{ article.displayDate }}</time>
                    </div>

                    <h3 class="news-card-title">{{ article.title }}</h3>
                    <p class="news-card-summary">{{ article.summary }}</p>

                    <ul v-if="article.tags.length > 0" class="news-tags" aria-label="文章标签">
                      <li v-for="tag in article.tags" :key="`${article.link}-${tag}`">{{ tag }}</li>
                    </ul>

                    <span class="news-card-action">
                      <Icon><LinkOutlined /></Icon>
                      {{ newsContent.openLabel }}
                    </span>
                  </div>
                </a>
              </article>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import newsContentJson from "@/pages/index/news.json";
import { ArrowBackFilled, ArrowForwardFilled, LinkOutlined } from "@vicons/material";
import { Icon } from "@vicons/utils";

interface ManualNewsItem {
  date: string;
  link: string;
  summary?: string;
  tags?: readonly string[];
  title: string;
}

interface NewsContent {
  ariaLabel: string;
  emptyLabel: string;
  feedUrl: string;
  items?: readonly ManualNewsItem[];
  kicker: string;
  openLabel: string;
  pageSize: number;
  retryLabel: string;
  sectionId: string;
  title: string;
}

interface ParsedArticle {
  displayDate: string;
  isoDate: string;
  link: string;
  publishedAt: number;
  summary: string;
  tags: readonly string[];
  title: string;
}

type LoadStatus = "idle" | "loading" | "success" | "error" | "empty";

const FEED_TIMEOUT_MS: number = 8000;
const SUMMARY_LENGTH: number = 132;
const DEFAULT_ERROR_MESSAGE: string = "新闻加载失败，请稍后重试。";
const DEFAULT_SUMMARY: string = "点击查看完整内容。";

const newsContent = newsContentJson as NewsContent;
const pageSize = Math.max(1, newsContent.pageSize);
const placeholderCount = computed<number>(() => pageSize);

const status = ref<LoadStatus>("idle");
const articles = ref<readonly ParsedArticle[]>([]);
const currentPage = ref<number>(1);
const pageDirection = ref<"next" | "prev">("next");
const errorMessage = ref<string>(DEFAULT_ERROR_MESSAGE);
const rssUnavailable = ref<boolean>(false);

let activeController: AbortController | null = null;

const totalPages = computed<number>(() => {
  if (articles.value.length === 0) {
    return 1;
  }

  return Math.ceil(articles.value.length / pageSize);
});

const pagedArticles = computed<readonly ParsedArticle[]>(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return articles.value.slice(startIndex, endIndex);
});

const pageTransitionName = computed<string>(() => {
  return pageDirection.value === "next" ? "news-slide-next" : "news-slide-prev";
});

const goPreviousPage = (): void => {
  if (currentPage.value <= 1) {
    return;
  }

  pageDirection.value = "prev";
  currentPage.value = Math.max(1, currentPage.value - 1);
};

const goNextPage = (): void => {
  if (currentPage.value >= totalPages.value) {
    return;
  }

  pageDirection.value = "next";
  currentPage.value = Math.min(totalPages.value, currentPage.value + 1);
};

const stripHtml = (value: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(value, "text/html");
  const rawText = doc.body.textContent ?? "";

  return rawText.replace(/\s+/g, " ").trim();
};

const truncateText = (value: string, maxLength: number): string => {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
};

const parseDate = (rawValue: string): Date | null => {
  const parsed = new Date(rawValue);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed;
};

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

const readRawSummary = (node: Element): string => {
  return (
    node.querySelector("description")?.textContent ??
    node.querySelector("summary")?.textContent ??
    node.querySelector("content")?.textContent ??
    ""
  );
};

const getSummaryText = (rawSummary: string): string => {
  const plainText = stripHtml(rawSummary);

  if (!plainText) {
    return DEFAULT_SUMMARY;
  }

  return truncateText(plainText, SUMMARY_LENGTH);
};

const readTags = (node: Element): readonly string[] => {
  const categories = Array.from(node.querySelectorAll("category"));
  const tags = categories
    .map((category) => {
      const term = category.getAttribute("term")?.trim();

      if (term) {
        return term;
      }

      return category.textContent?.trim() ?? "";
    })
    .filter((tag) => tag.length > 0);

  return tags.slice(0, 3);
};

const readRssLink = (item: Element): string => {
  const content = item.querySelector("link")?.textContent?.trim();

  if (content) {
    return content;
  }

  return item.querySelector("guid")?.textContent?.trim() ?? "";
};

const readAtomLink = (entry: Element): string => {
  const links = Array.from(entry.querySelectorAll("link"));
  const alternate = links.find((link) => (link.getAttribute("rel") ?? "alternate") === "alternate");

  return (alternate?.getAttribute("href") ?? links[0]?.getAttribute("href") ?? "").trim();
};

const parseRssItems = (xml: XMLDocument): readonly ParsedArticle[] => {
  const itemNodes = Array.from(xml.querySelectorAll("item"));

  return itemNodes
    .map((item): ParsedArticle | null => {
      const title = item.querySelector("title")?.textContent?.trim() ?? "";
      const link = readRssLink(item);
      const rawDate = item.querySelector("pubDate")?.textContent?.trim() ?? "";
      const parsedDate = parseDate(rawDate);

      if (!title || !link || !parsedDate) {
        return null;
      }

      const rawSummary = readRawSummary(item);

      return {
        displayDate: formatDate(parsedDate),
        isoDate: parsedDate.toISOString(),
        link,
        publishedAt: parsedDate.getTime(),
        summary: getSummaryText(rawSummary),
        tags: readTags(item),
        title,
      };
    })
    .filter((item): item is ParsedArticle => item !== null);
};

const parseAtomEntries = (xml: XMLDocument): readonly ParsedArticle[] => {
  const entryNodes = Array.from(xml.querySelectorAll("entry"));

  return entryNodes
    .map((entry): ParsedArticle | null => {
      const title = entry.querySelector("title")?.textContent?.trim() ?? "";
      const link = readAtomLink(entry);
      const rawDate =
        entry.querySelector("updated")?.textContent?.trim() ??
        entry.querySelector("published")?.textContent?.trim() ??
        "";
      const parsedDate = parseDate(rawDate);

      if (!title || !link || !parsedDate) {
        return null;
      }

      const rawSummary = readRawSummary(entry);

      return {
        displayDate: formatDate(parsedDate),
        isoDate: parsedDate.toISOString(),
        link,
        publishedAt: parsedDate.getTime(),
        summary: getSummaryText(rawSummary),
        tags: readTags(entry),
        title,
      };
    })
    .filter((entry): entry is ParsedArticle => entry !== null);
};

const parseFeed = (payload: string): readonly ParsedArticle[] => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(payload, "application/xml");
  const parserError = xml.querySelector("parsererror");

  if (parserError) {
    throw new Error("Invalid RSS payload");
  }

  const rssItems = parseRssItems(xml);

  if (rssItems.length > 0) {
    return rssItems;
  }

  return parseAtomEntries(xml);
};

const normalizeManualItems = (
  items: readonly ManualNewsItem[] | undefined,
): readonly ParsedArticle[] => {
  if (!items || items.length === 0) {
    return [];
  }

  return items
    .map((item): ParsedArticle | null => {
      const title = item.title.trim();
      const link = item.link.trim();
      const parsedDate = parseDate(item.date);

      if (!title || !link || !parsedDate) {
        return null;
      }

      const summary = (item.summary ?? "").trim();
      const tags = (item.tags ?? []).map((tag) => tag.trim()).filter((tag) => tag.length > 0);

      return {
        displayDate: formatDate(parsedDate),
        isoDate: parsedDate.toISOString(),
        link,
        publishedAt: parsedDate.getTime(),
        summary: summary ? truncateText(summary, SUMMARY_LENGTH) : DEFAULT_SUMMARY,
        tags: tags.slice(0, 3),
        title,
      };
    })
    .filter((item): item is ParsedArticle => item !== null);
};

const mergeArticles = (allArticles: readonly ParsedArticle[]): readonly ParsedArticle[] => {
  const articleByLink = new Map<string, ParsedArticle>();

  for (const article of allArticles) {
    const existing = articleByLink.get(article.link);

    if (!existing || article.publishedAt > existing.publishedAt) {
      articleByLink.set(article.link, article);
    }
  }

  return [...articleByLink.values()].sort(
    (left: ParsedArticle, right: ParsedArticle) => right.publishedAt - left.publishedAt,
  );
};

const setSuccessArticles = (value: readonly ParsedArticle[]): void => {
  articles.value = value;
  currentPage.value = 1;
  status.value = value.length > 0 ? "success" : "empty";
};

const fetchNews = async (): Promise<void> => {
  activeController?.abort();
  activeController = new AbortController();
  const timeoutId = window.setTimeout(() => {
    activeController?.abort();
  }, FEED_TIMEOUT_MS);

  status.value = "loading";
  errorMessage.value = DEFAULT_ERROR_MESSAGE;
  rssUnavailable.value = false;

  const manualArticles = normalizeManualItems(newsContent.items);

  try {
    const response = await fetch(newsContent.feedUrl, {
      method: "GET",
      headers: {
        Accept: "application/rss+xml, application/atom+xml, application/xml, text/xml",
      },
      signal: activeController.signal,
    });

    if (!response.ok) {
      throw new Error(`RSS request failed: ${response.status}`);
    }

    const body = await response.text();
    const rssArticles = parseFeed(body);
    setSuccessArticles(mergeArticles([...manualArticles, ...rssArticles]));
  } catch {
    if (manualArticles.length > 0) {
      rssUnavailable.value = true;
      setSuccessArticles(mergeArticles(manualArticles));
    } else {
      articles.value = [];
      status.value = "error";
      errorMessage.value = DEFAULT_ERROR_MESSAGE;
    }
  } finally {
    window.clearTimeout(timeoutId);
  }
};

onMounted(() => {
  void fetchNews();
});

onBeforeUnmount(() => {
  activeController?.abort();
  activeController = null;
});
</script>

<style scoped>
.news-section {
  position: relative;
  z-index: 1;

  padding: 3rem 24px;
  background: rgba(var(--bg-rgb), 0.74);
}

.news-container {
  margin: 0 auto;
  max-width: 1024px;
  box-sizing: border-box;
}

.news-header {
  margin-bottom: 24px;
}

.news-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.news-kicker {
  margin: 0 0 10px;

  color: var(--text-muted);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.news-title {
  margin: 0;
  flex: 1;
  min-width: 0;

  color: var(--text-strong);
  font-weight: 600;
  font-family:
    "Mozilla Headline", "Inter", "Helvetica Neue", "Chill Organic", "Segoe UI", sans-serif;
  font-size: clamp(32px, 5.2vw, 50px);
  line-height: 0.96;
}

.news-note {
  margin: 0 0 12px;

  color: var(--text-muted);
  font-size: 14px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.news-grid-shell {
  position: relative;
  height: 280px;
}

.news-slide-next-enter-active,
.news-slide-prev-enter-active {
  transition:
    opacity 200ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
}

.news-slide-next-leave-active,
.news-slide-prev-leave-active {
  transition:
    opacity 200ms cubic-bezier(0.4, 0, 1, 1),
    transform 200ms cubic-bezier(0.4, 0, 1, 1);
}

.news-slide-next-enter-from,
.news-slide-prev-leave-to {
  opacity: 0;
  transform: translateX(16px);
}

.news-slide-next-leave-to,
.news-slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-16px);
}

.news-slide-next-enter-active,
.news-slide-next-leave-active,
.news-slide-prev-enter-active,
.news-slide-prev-leave-active {
  position: absolute;
  inset: 0;
}

.news-card {
  height: 240px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
  transition: background-color 180ms ease;
}

.news-card-link {
  display: flex;
  flex-direction: column;

  height: 100%;

  text-decoration: none;
  color: var(--text);
}

.news-card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
  height: 100%;

  padding: 18px;
  box-sizing: border-box;

  overflow: hidden;
}

.news-card-link:focus-visible,
.retry-button:focus-visible,
.page-button:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

.news-meta {
  color: var(--text-muted);
  font-size: 13px;
}

.news-card-title {
  margin: 0;

  color: var(--text-strong);
  font-size: 24px;
  line-height: 1.08;
  font-family: "Mozilla Headline", "Inter", "Helvetica Neue", "Segoe UI", sans-serif;

  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.news-card-summary {
  margin: 0;

  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.64;

  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.news-tags {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  width: 100%;

  margin: 0;
  padding: 0;

  list-style: none;

  overflow: hidden;
}

.news-tags li {
  max-width: 100%;
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;

  color: var(--text-muted);
  font-size: 12px;
  line-height: 1.2;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-card-action {
  margin-top: auto;

  color: var(--text-accent);
  font-size: 14px;
  font-weight: 700;

  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.news-pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}

.news-pagination--inline {
  margin: 0;
}

.page-button {
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 999px;

  color: var(--text);
  background: rgba(var(--white-rgb), 0.9);
  font-size: 14px;
  font-weight: 600;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.page-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.status-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 16px;

  color: var(--text);
  background: var(--surface);
}

.status-box p {
  margin: 0;

  color: var(--text-muted);
  font-size: 15px;
}

.retry-button {
  min-width: 44px;
  min-height: 44px;
  padding: 10px 14px;
  border: 1px solid rgba(var(--text-rgb), 0.28);
  border-radius: 12px;

  color: var(--text);
  background: rgba(var(--white-rgb), 0.9);
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
}

.news-card--loading {
  display: flex;
  flex-direction: column;
  padding: 18px;
  box-sizing: border-box;
}

.skeleton {
  border-radius: 10px;
  background: color-mix(in srgb, var(--surface-accent) 55%, rgba(var(--white-rgb), 0.9) 45%);
}

.skeleton-meta {
  width: 40%;
  height: 14px;
}

.skeleton-title {
  margin-top: 10px;
  width: 80%;
  height: 34px;
}

.skeleton-body {
  margin-top: 8px;
  width: 100%;
  height: 12px;
}

.skeleton-body.short {
  width: 74%;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 1000px) {
  .news-grid-shell {
    min-height: calc(240px * 2 + 14px);
  }

  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .news-section {
    padding: 34px 0;
  }

  .news-container {
    padding: 0 16px;
  }

  .news-title-row {
    flex-wrap: wrap;
  }

  .news-pagination--inline {
    margin-left: auto;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .news-card {
    height: unset;
  }

  .news-grid-shell {
    height: unset;
    min-height: unset;
  }

  .status-box {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (hover: hover) and (pointer: fine) {
  .news-card:hover {
    background: var(--surface-accent);
  }
}

@media (prefers-reduced-motion: reduce) {
  .news-slide-next-enter-active,
  .news-slide-next-leave-active,
  .news-slide-prev-enter-active,
  .news-slide-prev-leave-active {
    position: static;
    transition: none;
  }

  .news-card {
    transition: none;
  }
}
</style>
