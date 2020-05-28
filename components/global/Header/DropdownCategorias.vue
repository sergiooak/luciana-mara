<template lang="html">
  <div id="DropdownCategorias" class="categorias bg-white shadow-lg p-4 w-64">
    <div class="-m-4">
      <nuxt-link  v-for="categoria in categorias" :key="'dropdown-' + categoria.slug"
                  :to="url(categoria.slug)"
                  class="flex justify-between items-center hover:bg-astronaut transition-color duration-300 ease px-4 py-2 text-astronaut hover:text-white">
        <span>
          {{ categoria.titulo }}
        </span>
        <svg class="h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
      </nuxt-link>
    </div>
    <footer class="border-t-2 border-gray-300 -m-4 mt-4">
      <nuxt-link to="/uniformes" class="flex justify-between items-center hover:bg-astronaut transition duration-300 ease p-4 text-astronaut hover:text-white">
        <span>
          Ver todos os uniformes
        </span>
      </nuxt-link>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'DropdownCategorias',
    data() {
      return{
        categorias: [
          {
            titulo: 'Masculino',
            slug: 'masculino',
            sub: [
              {
                titulo: 'Masculino',
                slug: 'masculino',
              }
            ]
          },
          {
            titulo: 'Feminino',
            slug: 'feminino',
            sub: [
              {
                titulo: 'Masculino',
                slug: 'masculino',
              }
            ]
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
