<template>
  <div class="container">
    <ul class="card-group">
      <li
        style="list-style-type: none;"
        v-bind:key="foto.id"
        v-for="foto of fotos"
      >
        <meu-painel :titulo="foto.titulo" :foto_url="foto.url">
          <img
            :src="foto.url"
            class="card-img-topw-100"
            height="250px"
            :alt="titulo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
//importando componente
import Painel from "./components/shared/painel/Painel.vue";

export default {
  components: {
    "meu-painel": Painel
  },

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

<style></style>
