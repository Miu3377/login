import HomePage from "@/page/HomePage.vue";
import UserPage from "@/page/UserPage.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Login",
    component: HomePage,
  },
  {
    path: "/user",
    name: "User",
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export { routes };

export default router;
