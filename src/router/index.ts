import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "intro",
      component: () => import("@/views/IndexView.vue"),
    },
  ],
});

export default router;
