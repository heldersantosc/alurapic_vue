<template>
  <div>
    <ul>
      <li v-bind:key="foto.id" v-for="foto of fotos">
        <h1>{{ foto.titulo }}</h1>
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapica",
      fotos: []
    };
  },
  //funcao que executa assim que o componente é criado
  //life cicle hooks
  created() {
    let promise = this.$http.get("http://localhost:3000/v1/fotos");
    //promisse com a resposta do servidor em json
    promise
      .then(res => res.json())
      .then(_fotos => (this.fotos = _fotos)) //acessando a foto da funcao data
      .then(err => console.log(err));
  }
};
</script>

<style>
body {
  background-color: black;
  color: white;
}
</style>
