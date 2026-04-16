# AGENTS

## Guidelines

### Code style

- Always annotate type using TypeScript, no `Any` allowed.
- Create new type or interface for complex types when it is possible to be reused.
- Use Chinese when writing comments.
- Consider write properiate comments when there is complex conditions, deep recursions, levels of loops, etc.
- Prettify CSS, group related attributes, seperate groups with an empty line

### Development Workflow

1. When user asks to do a blur task, investigate the code base, create a specific task list file TODO.md, for user to review.
2. Only when user explictly approves the plan should the actual code modifications be started.
3. Always lint and format the code after finishing editing.

### Code Organizing Rules

- For a scene, create `.vue` under `src/views`.
- For a reusable code snippet, create a component under `src/components`.
- For data structure, logics and stores, create `.ts` under `src/store` using Pinia.

### Vue.js Notices

- Always use composition setup API.
- Use NaiveUI for styling system and some universal components.
- Use CSS color variables in App.vue only.

## Repository Infomation

### Repo snapshot

- Single-package Vue 3 + Vite app (not a monorepo).
- Package manager is `pnpm` (`pnpm-lock.yaml` is source of truth).
- Required Node version from `package.json`: `^20.19.0 || >=22.12.0`.

### High-value commands

- Install: `pnpm install`
- Dev server: `pnpm dev`
- Production build: `pnpm build` (runs `type-check` and `vite build` in parallel via `run-p`).
- Type-check only: `pnpm type-check` (`vue-tsc --build` with project references).
- Unit tests: `pnpm test:unit`
- Run one test file once: `pnpm exec vitest --run src/__tests__/App.spec.ts`

### Lint/format behavior (easy to get wrong)

- `pnpm lint` is mutating: it runs both `oxlint . --fix` and `eslint . --fix --cache`.
- `pnpm format` only formats `src/` via `oxfmt src/` (not the whole repo).

### Project wiring

- App entrypoint: `src/main.ts` (creates Vue app, installs Pinia + router, mounts `#app`).
- Root component: `src/App.vue`.
- Router setup: `src/router/index.ts` using `createWebHistory(import.meta.env.BASE_URL)`.
- Path alias: `@/* -> src/*` (configured in `vite.config.ts` and `tsconfig.app.json`).

### Testing and TS config quirks

- Vitest runs in `jsdom` (`vitest.config.ts`).
- Vitest excludes `e2e/**` by default.
- Test lint rules target `src/**/__tests__/*` in `eslint.config.ts`.
- TS build info files are written under `node_modules/.tmp/` (not repo root).
