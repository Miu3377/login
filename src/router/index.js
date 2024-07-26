import HomePage from "@/page/HomePage.vue";
import UserPage from "@/page/UserPage.vue";
import EditPsw from "@/page/EditPsw.vue";
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
  {
    path: "/editpsw",
    component: EditPsw,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export { routes };

export default router;
