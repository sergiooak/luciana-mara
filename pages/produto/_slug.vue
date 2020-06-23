<template lang="html">
  <div class="wrapper pt-8">
    <main v-for="product in products" :key="product.id" class="container mx-auto mb-12 pt-8">
      <div class="wrapper w-10/12 mx-auto flex flex-col md:flex-row">
        <div class="w-full md:w-1/2">
          <Galeria :images="product.images" />
        </div>
        <div class="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 class="text-astronaut text-4xl md:mb-4 leading-none">{{ product.name }}</h1>
          <h2 class="valor flex flex-col text-mara text-2xl md:text-4xl">
            <div class="flex items-center ">
              {{ real(product.price) }}
              <div class="ml-2 text-xl text-astronaut" v-show="pedido.qtd > 1">
                x {{ pedido.qtd }} = {{ real(parseFloat(product.price * pedido.qtd).toFixed(2)) }}
              </div>
            </div>
            <small class="text-sm text-gray-600">
              até 3x de {{ real(parseFloat(product.price / 3).toFixed(2)) }}*
            </small>
          </h2>
          <button @click.prevent="addToCart()" class="border-2 border-astronaut px-6 py-4 my-4 uppercase text-astronaut">
            Adicionar ao carrinho
          </button>
          <div>
            <div class="detalhes">
              <div class="description flex flex-col md:flex-row items-center justify-between py-4 border-t-2 border-gray-300">
                <header class="text-lg text-astronaut md:mr-6">
                  Descrição:
                </header>
                <div class="content" v-html="product.description">
                </div>
              </div>
              <div class="quantidade flex flex-col md:flex-row items-center justify-between py-4 border-t-2 border-gray-300">
                <header class="text-lg text-astronaut md:mr-6">
                  Quantidade:
                </header>
                <div class="content">
                  <input class="form-input px-4 py-2 text-center" type="number" v-model="pedido.qtd">
                </div>
              </div>
              <div v-if="product.attributes[0]" class="attributes flex flex-col md:flex-row items-center justify-between py-4 border-t-2 border-gray-300">
                <header class="text-lg text-astronaut md:mr-6">
                  Tamanhos:
                </header>
                <div class="content flex flex-wrap">
                  <div @click="pedido.tamanho = tamanho"
                  :class="{ active: pedido.tamanho == tamanho }"
                  class="h-10 w-10 border-2 border-astronaut text-astronaut flex items-center justify-center ml-2 hover:bg-astronaut hover:text-white cursor-pointer mb-2"
                  v-for="tamanho in product.attributes[0].options">
                    {{ tamanho }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- <div class="container mx-auto bg-red-200 text-red-800 font-bold">
      {{ pedido }}
    </div> -->
    <!-- <section>
      <div class="container mx-auto">
        <HeadingSection title="Produtos Relacionados" />
      </div>
    </section> -->
  </div>
</template>

<script>
  import HeadingSection from "~/components/HeadingSection.vue"
  import Galeria from "~/components/Uniforme/Galeria.vue"

  export default {
    name: 'PaginaProduto',
    components: {
      HeadingSection,
      Galeria
    },
    async asyncData({ params, $axios }){
      let API_URL = process.env.API_URL;
      let TOKEN = process.env.TOKEN;
      let obj = {method: 'GET', headers: { 'Authorization': `Bearer ${TOKEN}`}}

      const products = await fetch(`${API_URL}/wp-json/wc/v3/products?status=publish&slug=${params.slug}`, obj)
        .then(res => res.json());

      return { products }
    },
    data() {
      return {
        pedido: {
          product: null,
          qtd: 1,
          tamanho: ''
        }
      }
    },
    mounted() {
      this.pedido.product = this.products[0];
      // if (this.product.attributes[0]) {
      //   this.pedido.tamanho = this.product.attributes[0].options[0];
      // }
    },
    // computed: {
    //   loading(){
    //     return this.$store.state.products.current.loading;
    //   },
    //   product(){
    //     return this.$store.state.products.current.item;
    //   },
    // },
    methods: {
      addToCart(){
        this.$store.dispatch("cart/add", this.pedido);
      },
      real(valor){
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
      }
    }
  }
</script>

<style lang="css" scoped>
  .active{
    @apply bg-astronaut text-white;
  }
</style>
