<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Produtos em destaque" />
    <main class="container mx-auto flex flex-wrap">
      <div v-for="produto in products" class="w-1/4 px-4 mb-16">
        <Produto :product="produto" :titulo="produto.name" :categoria="produto.categoria" :preco="produto.price" :images="produto.images" :slug="produto.slug" />
      </div>
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
