import { createRouter, createWebHistory } from "vue-router";
import DestinationShowVue from "../pages/DestinationShow.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("../pages/DestinationShow.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  //class that styles the active route link
  linkActiveClass: 'my-active-link-class'
});

export default router;
