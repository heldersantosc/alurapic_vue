<template>
  <div>
    <ul>
      <li v-bind:key="foto.id" v-for="foto of fotos">
        <h1>{{ titulo }}</h1>
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotos: [
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf1mhR-IxQn6tCJTCzsWcVj-zejS8gqiM2ZgeX9Pm1IyNUR4QN",
          titulo: "cachorro"
        },
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqfoWRAin8jCcqjR0NMgU5sC5fcckTGd9Os_bYf4JvP1rZX8Ob",
          titulo: "cachorrao"
        }
      ]
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
