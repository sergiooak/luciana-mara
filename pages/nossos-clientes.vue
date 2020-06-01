<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Nossos Clientes" />
    <main class="container mx-auto flex flex-wrap">
      em breve
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"
import Produto from "~/components/Produto.vue"

export default {
  name: 'TodosOsProdutos',
  components: {
    HeadingSection,
    Produto
  },
  computed: {
    products(){
      return this.$store.state.products.items;
    }
  },
  mounted() {
    return this.$store.dispatch("products/retrieve");
  }
}
</script>

<style lang="css" scoped>
</style>
