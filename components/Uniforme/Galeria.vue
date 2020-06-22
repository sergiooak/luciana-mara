<template lang="html">
  <div class="galeria md:pl-4 md:pr-20">
    <div class="atual w-full bg-gray-300">
      <img :src="currentImage.src" alt="">
    </div>
    <footer class="flex flex-wrap -mx-2" v-if="images.length > 1">
      <div v-for="(image, index) in images" class="thumb w-1/4 px-2 mt-4">
        <img :src="image.src" alt="" @click="currentImageIndex = index">
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Galeria',
  props: [
    'images'
  ],
  data() {
    return{
      currentImageIndex: 0
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
