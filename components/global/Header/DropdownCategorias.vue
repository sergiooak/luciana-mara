<template lang="html">
  <div id="DropdownCategorias" class="categorias bg-white shadow-lg p-4 w-64">
    <div class="-m-4">
      <div v-for="categoria in categorias" :key="'dropdown-' + categoria.slug" class="relative"
      @mouseover="categoria.mostraSub = true"
      @mouseleave="categoria.mostraSub = false">
        <nuxt-link
        :to="url(categoria.slug)"
        class="flex justify-between items-center hover:bg-astronaut transition-color duration-300 ease px-4 py-2 text-astronaut hover:text-white">
          <span>
            {{ categoria.titulo }}
          </span>
          <svg v-if="categoria.sub" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
        </nuxt-link>
        <div v-if="categoria.sub">
          <slide-y-up-transition>
            <div v-show="categoria.mostraSub" id="listaClientes" class="w-64 absolute flex flex-col -mt-10 bg-white shadow-lg z-50" style="left: 256px;">
              <nuxt-link v-for="sub in categoria.sub" :key="sub.slug"
              :to="url(sub.slug)"
              class="flex justify-between items-center hover:bg-astronaut transition-color duration-300 ease px-4 py-2 text-astronaut hover:text-white">
                <span>
                  {{ sub.titulo }}
                </span>
              </nuxt-link>
            </div>
          </slide-y-up-transition>
        </div>
      </div>
    </div>
    <footer class="border-t-2 border-gray-300 -m-4 mt-4">
      <nuxt-link to="/todos-os-produtos" class="flex justify-between items-center hover:bg-astronaut transition duration-300 ease p-4 text-astronaut hover:text-white">
        <span>
          Ver todos os produtos
        </span>
      </nuxt-link>
    </footer>
  </div>
</template>

<script>
  import { SlideYUpTransition } from 'vue2-transitions';

  export default {
    name: 'DropdownCategorias',
    components: {
      SlideYUpTransition
    },
    data() {
      return{
        categorias: [
          {
            titulo: 'Masculino',
            slug: 'masculino',
            mostraSub: false,
            sub: [
              {
                titulo: 'Calça',
                slug: 'calca-masculino',
              },
              {
                titulo: 'Camisa',
                slug: 'camisa-masculino',
              },
              {
                titulo: 'Camisa Polo',
                slug: 'camisa-polo-masculino',
              },
              {
                titulo: 'Jaleco',
                slug: 'jaleco-masculino',
              },
              {
                titulo: 'Scrubs',
                slug: 'scrubs-masculino',
              },
              {
                titulo: 'Touca',
                slug: 'touca-masculino',
              },
            ]
          },
          {
            titulo: 'Feminino',
            slug: 'feminino',
            mostraSub: false,
            sub: [
              {
                titulo: 'Blazer',
                slug: 'blazer-feminino',
              },
              {
                titulo: 'Blusas',
                slug: 'blusas-feminino',
              },
              {
                titulo: 'Calças',
                slug: 'calcas-feminino',
              },
              {
                titulo: 'Camisa Polo',
                slug: 'camisa-polo-feminino',
              },
              {
                titulo: 'Jaleco',
                slug: 'jaleco-feminino',
              },
              {
                titulo: 'Saia',
                slug: 'saia-feminino',
              },
              {
                titulo: 'Scrubs',
                slug: 'scrubs-feminino',
              },
              {
                titulo: 'Touca',
                slug: 'touca-feminino',
              },
              {
                titulo: 'Vestido',
                slug: 'vestido-feminino',
              },
            ]
          },
          {
            titulo: 'Máscara reutilizável',
            slug: 'mascara-reutilizavel'
          },
        ]
      }
    },
    methods:{
      url(slug){
        return `/categoria/${slug}`
      }
    },
    computed: {
      categories() {
        return this.$store.state.categories.items
      }
    }
  }
</script>

<style lang="css" scoped>
  .categorias{
    position: absolute;
    top: 30px;
    left: 0px;
  }
</style>
