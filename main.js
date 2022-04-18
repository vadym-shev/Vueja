import HomePage from "./pages/home.js";
import InfoPage from "./pages/info.js";
import Vue from "./libs/vue.js";
import VueRouter from "./libs/router.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/home", component: HomePage },
    { path: "/info", component: InfoPage }
  ]
});

new Vue({
  router,
  el: "#app",
  data: {},
  components: {}
});
