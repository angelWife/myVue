import { createRouter, createWebHistory } from "vue-router";
import vueapi from "../views/vueApi/global.vue";
import testPage from "../views/testPage/index.vue";

const routes = [
  {
    path: "/",
    name: "Vueapi",
    component: vueapi
  },
  {
    path: "/testPage",
    name: "TestPage",
    component: testPage
  },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
