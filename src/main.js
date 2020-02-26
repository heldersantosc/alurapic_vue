import Vue from "vue";
import App from "./App.vue";

//importando para usar a API
import VueResource from "vue-resource";
//importanto o Vue Routerr
import VueRouter from "vue-router";
//importando as rotas
import { routes } from "./routes";

//informando que alguns recursos estarão disponiveis para os componentes
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  el: "#app", //componente no html onde será renderizado
  router,
  render: h => h(App) //elemento que será renderizado
});
