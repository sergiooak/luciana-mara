<template lang="html">
  <div>
    <HeadingSection class="mt-12 mb-12" :title="'Categoria: ' + $route.params.slug" />
    <main class="container mx-auto flex justify-center flex-wrap px-2 md:px-0">
      <div v-for="produto in products" class="w-1/2 md:w-1/4 px-2 mb-4 md:mb-16">
        <Produto :product="produto" :titulo="produto.name" :categoria="produto.categoria" :preco="produto.price" :images="produto.images" :slug="produto.slug" />
      </div>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"
import Produto from "~/components/Produto.vue"

export default {
  name: 'Categoria',
  components: {
    HeadingSection,
    Produto
  },
  computed: {
    allProducts(){
      return this.$store.state.products.items;
    },
    products() {
      if(this.allProducts.length){
        return this.allProducts.filter(o => o.categories.map(function(e){return e.slug}).indexOf(this.$route.params.slug) != -1 ? true : false)
      }else{
        return false;
      }
    }
  },
  methods: {
  },
  mounted() {
    return this.$store.dispatch("products/retrieve");
  }
}
</script>

<style lang="css" scoped>
</style>
