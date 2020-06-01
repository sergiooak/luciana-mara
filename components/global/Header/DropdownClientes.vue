<template lang="html">
  <div id="DropdownClientes" class="categorias bg-white shadow-lg p-4 w-64">
    <div class="-m-4">
      <nuxt-link to="/nossos-clientes"
                  class="flex justify-between items-center hover:bg-astronaut transition-color duration-300 ease px-4 py-2 text-astronaut hover:text-white">
        <span>
          Nossos Clientes
        </span>
      </nuxt-link>
    </div>
    <footer class="border-t-2 border-gray-300 -m-4 mt-4"
    @mouseover="mostraRestrito = true"
    @mouseleave="mostraRestrito = false">
      <div class="relative flex justify-between items-center hover:bg-astronaut transition duration-300 ease p-4 text-astronaut hover:text-white">
        <span>
          Acesso restrito
        </span>
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
      </div>
      <slide-y-up-transition>
        <div v-show="mostraRestrito" id="listaClientes" class="w-64 absolute flex flex-col">
          <a class="flex justify-between items-center bg-white hover:bg-astronaut transition duration-300 ease p-4 text-astronaut hover:text-white" href="http://www.lucianamarquesuniformes.com.br/unimed/" target="_blank">
            <span>
              Unimed
            </span>
          </a>
          <a class="flex justify-between items-center bg-white hover:bg-astronaut transition duration-300 ease p-4 text-astronaut hover:text-white" href="http://www.lucianamarquesuniformes.com.br/sabin/" target="_blank">
            <span>
              Sabin
            </span>
          </a>
          <a class="flex justify-between items-center bg-white hover:bg-astronaut transition duration-300 ease p-4 text-astronaut hover:text-white" href="http://www.lucianamarquesuniformes.com.br/agendamento-do-monstruario/" target="_blank">
            <span>
              Agendamento do Mostruario
            </span>
          </a>
          <a class="flex justify-between items-center bg-white hover:bg-astronaut transition duration-300 ease p-4 text-astronaut hover:text-white" href="http://www.lucianamarquesuniformes.com.br/download/" target="_blank">
            <span>
              Download
            </span>
          </a>
        </div>
      </slide-y-up-transition>
    </footer>
  </div>
</template>

<script>
  import { SlideYUpTransition } from 'vue2-transitions';

  export default {
    name: 'DropdownClientes',
    components: {
      SlideYUpTransition
    },
    data() {
      return{
        mostraRestrito: false
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
    left: 150px;
  }

  #listaClientes{
    left: 256px;
    top: 42px;
  }
</style>
