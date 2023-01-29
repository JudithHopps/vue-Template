import { createRouter, createWebHistory } from "vue-router";
import EffectView from "../pages/EffectView.vue";
import ArticleView from "../pages/ArticleView.vue";
import CardView from "../pages/CardView.vue";

const routes = [
  {
    path: "/",
    name: "effect",
    component: EffectView,
  },
  {
    path: "/article",
    name: "article",
    component: ArticleView,
  },
  {
    path: "/card",
    name: "card",
    component: CardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
