import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/map",
      name: "map",
      component: () => import("@/views/Map.vue"),
    },
    {
      path: "/cesium",
      name: "cesium",
      component: () => import("@/views/CesiumMap.vue"),
    },
  ],
});

export default router;
