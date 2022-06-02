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
    path: "/brazil",
    name: "brazil",
    component: () => import("../pages/Brazil.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import("../pages/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import("../pages/Panama.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () => import("../pages/Hawaii.vue"),
  },
  {
    path: "/destination/:id",
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
