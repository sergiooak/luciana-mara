<template lang="html">
  <div class="wrapper pt-8">
    <main class="container mx-auto flex">
      <div class="w-1/2">
        <Galeria :fotos="fotos" />
      </div>
      <div class="w-1/2">
        mostra o produto {{$route.params.slug}}
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
        fotos: [
          'https://via.placeholder.com/544',
          'https://via.placeholder.com/545',
          'https://via.placeholder.com/546',
          'https://via.placeholder.com/547',
        ]
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
