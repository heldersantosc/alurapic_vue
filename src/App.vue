<template>
  <div>
    <h1>Lista de fotos</h1>
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
      fotos: []
    };
  },
  //funcao que executa assim que o componente é criado
  //life cicle hooks
  created() {
    alert("componente criado");
  }
};
</script>

<style>
body {
  background-color: black;
  color: white;
}
</style>
