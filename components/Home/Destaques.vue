<template lang="html">
  <section class="destaques">
    <HeadingSection class="mt-8 mb-8" title="Produtos em destaque" />
    <div class="container mx-auto flex flex-wrap -mb-16">
      <div v-for="produto in products" class="w-1/2 md:w-1/4 px-2 md:px-4 mb-4 md:mb-16">
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
    components: {
      HeadingSection,
      Produto
    },
    data: function (){
      return {
        destaques: [
          {
            titulo: "Lorem Ipsum 1",
            categoria: "Categoria 1",
            preco: "R$ 000,00",
            imagem: "tests/demo",
            slug: 'lorem-ipsum-1'
          },
          {
            titulo: "Sit Dolor",
            categoria: "Categoria",
            preco: "R$ 000,00",
            imagem: "tests/demo_2",
            slug: 'sit-dolor'
          },
          {
            titulo: "Lorem Ipsum",
            categoria: "Categoria",
            preco: "R$ 000,00",
            imagem: "tests/demo_3",
            slug: 'lorem-ipsum'
          },
          {
            titulo: "Blusa Laço Cavada",
            categoria: "Feminino / Blusas",
            preco: "R$ 000,00",
            imagem: "tests/demo_4",
            slug: 'lorem-ipsum'
          }
        ]
      }
    },
    computed: {
      products(){
        if(this.$store.state.products.trending){
          return this.$store.state.products.trending.items
        }else{
          return [];
        }
      },
      isLoading(){
        return this.$store.state.products ? this.$store.state.products.trending.loading : true;
      }
    },
    mounted: function (){

    }
  }
</script>

<style lang="css" scoped>

</style>
