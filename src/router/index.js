import { createRouter, createWebHistory } from "vue-router";
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
    component: () => import("../pages/DestinationShow.vue"),
    //accessing the route id as a prop helps decouple components from the router
    props: route =>({id: parseInt(route.params.id)}),
    children:[
      {
        path: ":experienceSlug",
        name:"experienceShow",
        component:() => import("../pages/ExperienceShow.vue"),
        // props: route => ({...route.params, id: parseInt(route.params.id)})
      }
    ]
  },
  //not found route
  {
    path: '/:pathMatch(.*)*', name: 'NotFound', component: import("../pages/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  //class that styles the active route link
  linkActiveClass: 'my-active-link-class'
});

export default router;
