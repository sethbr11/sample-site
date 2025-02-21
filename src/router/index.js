import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});

export default router;
