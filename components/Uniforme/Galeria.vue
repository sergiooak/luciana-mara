<template lang="html">
  <div class="galeria md:pl-4 md:pr-20">
    <div class="atual w-full bg-gray-300">
      <img :src="safeSRC(fotos[currentFotoIndex])" alt="">
    </div>
    <footer class="flex flex-wrap -mx-2" v-if="fotos.length > 1">
      <div v-for="(foto, index) in fotos" class="thumb w-1/4 px-2 mt-4">
        <img :src="safeSRC(foto)" alt="" @click="currentFotoIndex = index">
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Galeria',
  data() {
    return{
      currentFotoIndex: 0
    }
  },
  computed: {
    fotos() {
      return this.$store.state.products.current.item.images;
    },
    currentFoto() {
      return this.fotos[this.currentFotoIndex]
    }
  },
  methods: {
    safeSRC(photo){
      return photo ? photo.src : 'https://res.cloudinary.com/luciana-mara/image/upload/c_thumb,g_face,w_288,h_400,y_0,z_0.25/c_scale,l_logos:overlay,o_07,w_0.5,fl_tiled/woocommerce/8-DSC_7944.png'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
