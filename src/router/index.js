import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import sourceData from "../data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("../pages/DestinationShow.vue"),
    //accessing the route id as a prop helps decouple components from the router
    props: (route) => ({ id: parseInt(route.params.id) }),
    //adding navigation guard if data id doesnt exist navigate to not found
    beforeEnter: (to, from) => {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists)
        return {
          name: "NotFound",
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.split("/").slice(1) },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experienceShow",
        component: () => import("../pages/ExperienceShow.vue"),
        // props: route => ({...route.params, id: parseInt(route.params.id)})
      },
    ],
  },
  //not found route
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  //class that styles the active route link
  linkActiveClass: "my-active-link-class",
});

export default router;
