import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Auth from "../pages/Auth.vue";
import Landing from "../pages/Landing.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Dashboard,
    },
    {
      path: "/signup",
      component: Auth,
    },
    {
      path: "/landing",
      component: Landing,
    },
  ],
});

export default router;
