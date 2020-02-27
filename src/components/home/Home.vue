<template>
  <div>
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
        <meu-painel :titulo="foto.titulo" class="text-center">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove($event, foto)"
            :confirmacao="false"
            estilo="danger"
            class="m-2"
          ></meu-botao>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
//importando componente
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
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
  methods: {
    remove($event, foto) {
      if ($event) {
        alert($event);
      } //recebendo evento, variavel do elemento pai)
      alert("remover foto" + foto.titulo);
      /*
      if (confirm("Confirma operacao?")) {
        alert("remover foto" + foto.titulo);
      }
      */
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
