import Home from "./views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", component: Home }];

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

export default routers;
