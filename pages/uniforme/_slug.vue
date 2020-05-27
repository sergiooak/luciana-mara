<template lang="html">
  <div class="wrapper pt-8">
    <main class="container mx-auto flex">
      <div class="w-1/2">
        <Galeria v-if="product.slug == $route.params.slug" />
      </div>
      <div class="w-1/2">
        <h1 class="text-astronaut text-4xl mb-4">{{ product.name }}</h1>
        <h2 class="valor flex flex-col text-mara text-2xl">
          {{ product.price }}
          <small class="text-sm text-gray-600">
            até 6x de 000*
          </small>
        </h2>
        <button class="border-2 border-astronaut px-6 py-4 my-4 uppercase text-astronaut">
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
                <input type="number">
              </div>
            </div>
            <div class="attributes flex items-center justify-between py-4 border-t-2 border-gray-300">
              <header class="text-lg text-astronaut">
                Tamanhos:
              </header>
              <div class="content flex">
                <div class="h-10 w-10 border-2 border-astronaut text-astronaut flex items-center justify-center ml-2 hover:bg-astronaut hover:text-white cursor-pointer" v-for="tamanho in product.attributes[0].options">
                  {{ tamanho }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section>
      <div class="container mx-auto">
        <HeadingSection title="Produtos Relacionados" />
      </div>
    </section>
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
      }
    },
    computed: {
      product(){
        return this.$store.state.products.current;
      },
    },
  }
</script>

<style lang="css" scoped>
</style>
