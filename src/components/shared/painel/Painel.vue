<template>
  <div class="card m-2" style="width: 18rem;">
    <slot></slot>
    <div class="card-body">
      <h5 class="card-title text-center">{{ titulo }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titulo", "foto_url"]
};
</script>

<style scoped>
.card {
  box-shadow: 2px 2px 10px rgba(68, 68, 68, 0.1);
}
</style>
