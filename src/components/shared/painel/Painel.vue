<template>
  <div class="card m-2" style="width: 18rem;">
    <div class="card-body" v-on:click="visivel = !visivel">
      <h5 class="card-title text-center">{{ titulo }}</h5>
    </div>
    <transition name="painel-fade">
      <div v-show="visivel" @dblclick="visivel = !visivel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titulo"],

  data() {
    return {
      visivel: true
    };
  }
};
</script>

<style scoped>
.card {
  box-shadow: 2px 2px 10px rgba(68, 68, 68, 0.1);
}
.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.2s;
}
</style>
