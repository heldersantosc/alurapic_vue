<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto.url" :alt="foto.titulo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      foto: {
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf1mhR-IxQn6tCJTCzsWcVj-zejS8gqiM2ZgeX9Pm1IyNUR4QN"
      }
    };
  }
};
</script>

<style>
body {
  background-color: black;
  color: white;
}
</style>
