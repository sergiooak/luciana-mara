<template lang="html">
  <nuxt-link :to="url(slug)" class="produto flex flex-col bg-white shadow-lg relative transition-all ease duration-150 hover:shadow-xl">
    <div>
      <figure>
        <img src="https://via.placeholder.com/288" alt="">
      </figure>
    </div>
    <div class="p-4">
      <span class="categoria text-gray-500">
        {{ categoria }}
      </span>
      <h4 class="text-xl text-astronaut -mt-1">
        {{ titulo }}
      </h4>
      <p class="preco text-lg text-mara">
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
      return `/uniforme/${slug}`
    }
  }
}
</script>

<style lang="css" scoped>
  .produto{
    top: 0;
  }

  .produto:hover{
    top: -10px;
  }
</style>
