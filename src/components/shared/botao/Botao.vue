<template>
  <button
    @click="disparaAcao()"
    class="btn"
    :class="estiloDoBotao"
    :tipo="tipo"
  >
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    tipo: {
      required: true,
      type: String
    },
    rotulo: {
      required: true,
      type: String
    },
    confirmacao: {
      required: true,
      type: Boolean
    },
    estilo: {
      type: String
    }
  },

  methods: {
    //evento customizado
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma?")) {
          this.$emit("botaoAtivado", new Date());
        }
        return;
      }
      this.$emit("botaoAtivado");
    }
  },
  computed: {
    estiloDoBotao() {
      if (this.estilo == "primary") return "btn-primary";
      if (this.estilo == "danger") return "btn-danger";
    }
  }
};
</script>

<style></style>
