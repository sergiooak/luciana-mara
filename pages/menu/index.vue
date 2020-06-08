<template lang="html">
  <div class="min-h-screen">
    <main class="container mx-auto flex flex-col justify-between" style="height: calc(100vh - 150px);">
      <div>
        <div class="flex flex-col items-center mt-4">
          <h1>Produtos</h1>
          <div v-for="categoria in categorias" :key="'dropdown-' + categoria.slug" class="relative">
            <nuxt-link
            :to="url(categoria.slug)"
            class="flex justify-between items-center hover:bg-astronaut transition-color duration-300 ease px-4 py-2 text-astronaut hover:text-white">
              <span>
                {{ categoria.titulo }}
              </span>
              <svg v-if="categoria.sub" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </nuxt-link>
            <div v-if="categoria.sub">

                <div v-show="categoria.mostraSub" id="listaClientes" class="w-64 absolute flex flex-col -mt-10 bg-white shadow-lg z-50" style="left: 256px;">
                  <nuxt-link v-for="sub in categoria.sub" :key="sub.slug"
                  :to="url(sub.slug)"
                  class="flex justify-between items-center hover:bg-astronaut transition-color duration-300 ease px-4 py-2 text-astronaut hover:text-white">
                    <span>
                      {{ sub.titulo }}
                    </span>
                  </nuxt-link>
                </div>

            </div>
          </div>
          <footer class="border-2 border-gray-300 -m-4 mt-4 mb-4">
            <nuxt-link to="/todos-os-produtos" class="flex justify-between items-center hover:bg-astronaut transition duration-300 ease p-4 text-astronaut hover:text-white">
              <span>
                Ver todos os produtos
              </span>
            </nuxt-link>
          </footer>
        </div>
        <div class="flex flex-col items-center mt-4 border-t-2 border-gray-400 pt-4">
          <h1>Clientes</h1>
          <footer class="border-2 border-gray-300 -m-4 mt-4 mb-4">
            <nuxt-link to="/menu/acesso-restrito" class="flex justify-between items-center hover:bg-astronaut transition duration-300 ease p-4 text-astronaut hover:text-white">
              <span>
                Acesso Restrito
              </span>
            </nuxt-link>
          </footer>
        </div>
      </div>
      <footer class="flex justify-center">
        <div v-if="typeof user !== 'undefined'" class="mr-4 pr-4 border-r-2 border-gray-400">
          <nuxt-link v-if="!user.logado" to="/login" class="flex items-center cursor-pointer text-astronaut hover:text-mara">
            <svg class="w-6 h-6 mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="currentColor" /><path d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z" fill="currentColor" /></svg>
            <span>
              Fazer Login
            </span>
          </nuxt-link>
          <nuxt-link v-else to="/minha-conta" class="flex items-center cursor-pointer text-astronaut hover:text-mara">
            <svg class="w-6 h-6 mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="currentColor" /><path d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z" fill="currentColor" /></svg>
            <span>
              Minha Conta
            </span>
          </nuxt-link>
        </div>
        <CarrinhoHeader />
      </footer>
    </main>
  </div>
</template>

<script>
import CarrinhoHeader     from '~/components/global/Header/CarrinhoHeader.vue';

export default {
  name: 'Menu',
  components: {
    CarrinhoHeader,
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
  methods: {
    url(slug){
      return `/categoria/${slug}`
    }
  },
  computed: {
    user(){
      return this.$store.state.localStorage.user;
    }
  },
}
</script>

<style lang="css" scoped>
</style>
