import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import PortfolioView from "../pages/PortfolioView.vue";
import SkillView from "../pages/SkillView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/skill",
    name: "skill",
    component: SkillView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
