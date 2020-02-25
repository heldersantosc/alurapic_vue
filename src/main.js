import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app", //componente no html onde será renderizado
  render: h => h(App) //elemento que será renderizado
});
