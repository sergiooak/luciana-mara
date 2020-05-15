<template lang="html">
  <nuxt-link :to="url(slug)" class="flex flex-col bg-white shadow-lg">
    <div>
      <figure>
        <img src="https://via.placeholder.com/288" alt="">
      </figure>
    </div>
    <div class="p-4">
      <span class="categoria text-gray-600 font-bold">
        {{ categoria }}
      </span>
      <h4 class="text-xl text-astronaut font-bold">
        {{ titulo }}
      </h4>
      <p class="preco text-lg text-mara font-bold">
        {{ preco }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Produto',
  props: [
    'titulo',
    'categoria',
    'preco',
    'imagem',
    'slug'
  ],
  methods: {
    url(slug) {
      return `/produto/${slug}`
    }
  }
}
</script>

<style lang="css" scoped>
  .categoria{

  }
</style>
