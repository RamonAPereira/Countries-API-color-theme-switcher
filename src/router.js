import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import CountryDetails from "./pages/CountryDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/country-details/:flag", component: CountryDetails },
    { path: "/catchAll(.*)", component: HomePage },
  ],
});

export default router;
