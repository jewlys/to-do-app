import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Auth from "../pages/Auth.vue";
import Landing from "../pages/Landing.vue";
import LoginPage from "../pages/LoginPage.vue";
import Forgotpassword from "../pages/Forgotpassword.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/signup",
      component: Auth,
    },
    {
      path: "/",
      component: Landing,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/forgot",
      component: Forgotpassword,
    },
  ],
});

export default router;
