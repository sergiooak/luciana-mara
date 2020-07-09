<template lang="html">
  <div class="pt-8 wrapper">
    <main class="container pt-8 mx-auto mb-12">
      <div class="flex flex-col w-10/12 mx-auto wrapper md:flex-row">
        <div class="w-full md:w-1/2">
          <Galeria :images="product.images" />
        </div>
        <div class="w-full mt-8 md:w-1/2 md:mt-0">
          <h1 class="text-4xl leading-none text-astronaut md:mb-4">{{ product.name }}</h1>
          <h2 class="flex flex-col text-2xl valor text-mara md:text-4xl">
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
          <button @click.prevent="addToCart()" class="px-6 py-4 my-4 uppercase border-2 border-astronaut text-astronaut">
            Adicionar ao carrinho
          </button>
          <div>
            <div class="detalhes">
              <div class="flex flex-col items-center justify-between py-4 border-t-2 border-gray-300 description md:flex-row">
                <header class="text-lg text-astronaut md:mr-6">
                  Descrição:
                </header>
                <div class="content" v-html="product.description">
                </div>
              </div>
              <div class="flex flex-col items-center justify-between py-4 border-t-2 border-gray-300 quantidade md:flex-row">
                <header class="text-lg text-astronaut md:mr-6">
                  Quantidade:
                </header>
                <div class="content">
                  <input class="px-4 py-2 text-center form-input" type="number" v-model="pedido.qtd">
                </div>
              </div>
              <div v-if="tamanhos" class="flex flex-col items-center justify-between py-4 border-t-2 border-gray-300 attributes md:flex-row">
                <header class="text-lg text-astronaut md:mr-6">
                  Tamanhos:
                </header>
                <div class="flex flex-wrap content">
                  <div @click="pedido.tamanho = tamanho"
                  :class="{ active: pedido.tamanho == tamanho }"
                  class="flex items-center justify-center w-10 h-10 mb-2 ml-2 border-2 cursor-pointer border-astronaut text-astronaut hover:bg-astronaut hover:text-white"
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
    async asyncData({ params, $axios, $config: {apiURL, apiToken} }){
      let API_URL = apiURL;
      let TOKEN = apiToken;
      let obj = {method: 'GET', headers: { 'Authorization': `Bearer ${TOKEN}`}}

      const products = await fetch(`${API_URL}/wp-json/wc/v3/products?status=publish&slug=${params.slug}`, obj)
        .then(res => res.json());

      let product = products[0];

      return { product }
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
      this.pedido.product = this.product;
    },
    computed: {
      tamanhos(){
        let tamanhos = this.product.attributes.findIndex(e => e.name == "Tamanhos");
        return tamanhos == -1 ? false : this.product.attributes[tamanhos].options;
      },
      cores(){
        let cores = this.product.attributes.findIndex(e => e.name == "Cor");
        return cores == -1 ? false : this.product.attributes[cores].options;
      }
    },
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
