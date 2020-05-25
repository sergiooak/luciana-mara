<template lang="html">
  <div class="galeria pl-4 pr-20">
    <div class="atual w-full bg-gray-300">
      <img :src="fotos[currentFotoIndex].src" alt="">
    </div>
    <footer class="flex flex-wrap -mx-2">
      <div v-for="foto in fotos" class="thumb w-1/4 px-2 mt-4">
        <img :src="foto.src" alt="">
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Galeria',
  props: [
    'fotos'
  ],
  data() {
    return{
      currentFotoIndex: 0
    }
  },
  computed: {
    currentFoto() {
      return this.fotos[this.currentFotoIndex]
    }
  }
}
</script>

<style lang="css" scoped>
  .atual{
    min-height: 544px;
  }
</style>
