import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TvShows from "../views/TvShows.vue";
import Movies from "../views/Movies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/TvShows",
    name: "TvShows",
    component: TvShows,
  },
  {
    path: "/Movies",
    name: "Movies",
    component: Movies,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
