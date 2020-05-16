<template lang="html">
  <section class="destaques">
    <HeadingSection title="Produtos em destaque" />
    <div class="container mx-auto flex flex-wrap">
      <div v-for="produto in destaques" class="w-1/4 px-4">
        <Produto :titulo="produto.titulo" :categoria="produto.categoria" :preco="produto.preco" :imagem="produto.imagem" :slug="produto.slug" />
      </div>
    </div>
  </section>
</template>

<script>
  import HeadingSection from "~/components/HeadingSection.vue"
  import Produto from "~/components/produto.vue"

  export default {
    name: 'Destaques',
    components: {
      HeadingSection,
      Produto
    },
    data: function (){
      return {
        destaques: [
          {
            titulo: "Lorem Ipsum",
            categoria: "Categoria",
            preco: "R$ 000,00",
            imagem: "...",
            slug: 'lorem-ipsum'
          },
          {
            titulo: "Lorem Ipsum",
            categoria: "Categoria",
            preco: "R$ 000,00",
            imagem: "...",
            slug: 'lorem-ipsum'
          },
          {
            titulo: "Lorem Ipsum",
            categoria: "Categoria",
            preco: "R$ 000,00",
            imagem: "...",
            slug: 'lorem-ipsum'
          },
          {
            titulo: "Lorem Ipsum",
            categoria: "Categoria",
            preco: "R$ 000,00",
            imagem: "...",
            slug: 'lorem-ipsum'
          },
        ]
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
