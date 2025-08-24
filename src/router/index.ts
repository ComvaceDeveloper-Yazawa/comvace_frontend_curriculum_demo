// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";

// 画面は遅延読み込み（/src/views に用意してください）
const Home = () => import("@/views/HomeIndex.vue");

const router = createRouter({
  // Vite 環境では BASE_URL に vite.config.ts の base が自動反映される
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/html/assignment1",
      name: "html-assignment1",
      component: () => import("@/components/AssignmentHTML1.vue"),
    },
    // 404（:pathMatch は必ず最後）
    // { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

export default router;
