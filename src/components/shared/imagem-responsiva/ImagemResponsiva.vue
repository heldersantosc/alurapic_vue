<template>
  <img :src="url" class="card-img-top" height="250px" :alt="titulo"
/></template>
<script>
export default {
  props: ["url", "titulo"]
};
</script>
<style scoped>
.card-img-top {
  width: 100%;
}
</style>
