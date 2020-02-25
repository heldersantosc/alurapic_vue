<template>
  <div class="card m-2" style="width: 18rem;">
    <div class="card-body" v-on:dblclick="visivel = !visivel">
      <h5 class="card-title text-center">{{ titulo }}</h5>
    </div>
    <div v-show="visivel" @dblclick="visivel = !visivel">
      <slot></slot>
    </div>
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
</style>
