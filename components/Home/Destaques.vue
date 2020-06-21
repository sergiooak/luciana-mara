<template lang="html">
  <section class="destaques">
    <HeadingSection class="mt-8 mb-8" title="Produtos em destaque" />
    <div class="container mx-auto flex flex-wrap -mb-16">
      <!-- {{ trends }} -->
      <div v-for="produto in trends" class="w-1/2 md:w-1/4 px-2 md:px-4 mb-4 md:mb-16">
          <Produto :product="produto" :titulo="produto.name" :categoria="produto.categoria" :preco="produto.price" :images="produto.images" :slug="produto.slug" />
      </div>
    </div>
  </section>
</template>

<script>
  import HeadingSection from "~/components/HeadingSection.vue"
  import Produto from "~/components/Produto.vue"

  export default {
    name: 'Destaques',
    props: [
      'trends'
    ],
    components: {
      HeadingSection,
      Produto
    },
    data: function (){
      return {
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
