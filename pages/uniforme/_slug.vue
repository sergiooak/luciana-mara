<template lang="html">
  <div class="wrapper pt-8">
    <main v-if="!loading" class="container mx-auto">
      <div class="wrapper w-10/12 mx-auto flex">
        <div class="w-1/2">
          <Galeria v-if="product.slug == $route.params.slug" />
        </div>
        <div class="w-1/2">
          <h1 class="text-astronaut text-4xl mb-4">{{ product.name }}</h1>
          <h2 class="valor flex flex-col text-mara text-4xl">
            <div class="flex items-center ">
              {{ product.price }}
              <div class="ml-2 text-xl text-astronaut" v-show="pedido.qtd > 1">
                x {{ pedido.qtd }} = {{ parseFloat(product.price * pedido.qtd).toFixed(2) }}
              </div>
            </div>
            <small class="text-sm text-gray-600">
              até 6x de 000*
            </small>
          </h2>
          <button @click.prevent="addToCart()" class="border-2 border-astronaut px-6 py-4 my-4 uppercase text-astronaut">
            Adicionar ao carrinho
          </button>
          <div>
            <div class="detalhes">
              <div class="description flex items-center justify-between py-4 border-t-2 border-gray-300">
                <header class="text-lg text-astronaut">
                  Descrição:
                </header class="text-lg text-astronaut">
                <div class="content" v-html="product.description">
                </div>
              </div>
              <div class="quantidade flex items-center justify-between py-4 border-t-2 border-gray-300">
                <header class="text-lg text-astronaut">
                  Quantidade:
                </header class="text-lg text-astronaut">
                <div class="content">
                  <input class="form-input px-4 py-2 text-center" type="number" v-model="pedido.qtd">
                </div>
              </div>
              <div class="attributes flex items-center justify-between py-4 border-t-2 border-gray-300">
                <header class="text-lg text-astronaut">
                  Tamanhos:
                </header>
                <div v-if="product.attributes" class="content flex">
                  <div @click="pedido.tamanho = tamanho"
                  :class="{ active: pedido.tamanho == tamanho }"
                  class="h-10 w-10 border-2 border-astronaut text-astronaut flex items-center justify-center ml-2 hover:bg-astronaut hover:text-white cursor-pointer"
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
      let payload = this.$route.params.slug;
      this.$store.dispatch("products/retrieveSingle", payload);

      this.pedido.product = this.product;
      this.pedido.tamanho = this.product.attributes[0].options[0];
    },
    computed: {
      loading(){
        return this.$store.state.products.current.loading;
      },
      product(){
        return this.$store.state.products.current.item;
      },
    },
    methods: {
      addToCart(){
        this.$store.dispatch("cart/add", this.pedido);
      }
    }
  }
</script>

<style lang="css" scoped>
  .active{
    @apply bg-astronaut text-white;
  }
</style>
