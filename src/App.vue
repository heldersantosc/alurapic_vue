<template>
  <div class="container m-5">
    <div class="row justify-content-center">
      <input
        type="search"
        v-on:input="filtro = $event.target.value"
        class="form-control w-50"
        placeholder="Filtro"
      />
    </div>
    <ul class="card-group row row-cols-1 row-cols-md-3">
      <li
        style="list-style-type: none;"
        v-bind:key="foto.id"
        v-for="foto of fotosComFiltro"
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
      fotos: [],
      filtro: ""
    };
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        /*filtrar*/
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
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
