import Vue from "vue";
import App from "./App.vue";

//importando para usar a API
import VueResource from "vue-resource";

//informando que alguns recursos estarão disponiveis para os componentes
Vue.use(VueResource);

new Vue({
  el: "#app", //componente no html onde será renderizado
  render: h => h(App) //elemento que será renderizado
});
