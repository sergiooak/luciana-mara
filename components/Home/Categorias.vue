<template lang="html">
  <section class="categorias">
    <HeadingSection title="Categorias" />
    <div class="container mx-auto flex flex-wrap">
      <nuxt-link v-for="categoria in categorias" :key="categoria.slug" :to="url(categoria.slug)" class="categoria w-1/6 px-4">
        <div class="bg-white shadow">
          {{ categoria.titulo }}
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  import HeadingSection from "~/components/HeadingSection.vue"
  export default {
    name: 'Categorias',
    components: {
      HeadingSection
    },
    data: function (){
      return{
        categorias: [
          {
            titulo: "masculino",
            slug: "masculino"
          },
          {
            titulo: "masculino",
            slug: "masculino"
          },
          {
            titulo: "masculino",
            slug: "masculino"
          },
          {
            titulo: "masculino",
            slug: "masculino"
          },
          {
            titulo: "masculino",
            slug: "masculino"
          },
          {
            titulo: "masculino",
            slug: "masculino"
          },
        ]
      }
    },
    methods: {
      url(slug){
        return `/categoria/${slug}`
      }
    }
  }
</script>

<style lang="css" scoped>
  .categoria div{
    height: 180px;
  }
</style>
