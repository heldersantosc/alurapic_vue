<template>
  <div class="container m-5">
    <meu-menu :rotas='routes'></meu-menu>
    <transition name='pagina'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from './components/shared/menu/Menu.vue';
export default {
  components: {
    'meu-menu' : Menu
  },
  data() {
    return {
      routes
    };
  }
};
</script>

<style>
body {
  background: black;
}
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-active {
  transition: opacity 0.2s;
}
</style>
