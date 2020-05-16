<template lang="html">
  <div id="slide" class="flex justify-between items-center mx-auto">
    <div class="bloco-texto">
      <h1 class="text-4xl text-astronaut font-be">
        {{ content.titulo }}
      </h1>
      <h2 class="text-lg text-gray-800 font-bold w-3/4 leading-tight">
        {{ content.conteudo }}
      </h2>
      <nuxt-link :to="url()" class="border-2 border-astronaut text-astronaut py-2 px-6 inline-block mt-8">
        {{ content.cta }}
      </nuxt-link>
    </div>
    <img :src="content.imagem" alt="">
  </div>
</template>

<script>
export default {
  name: 'SliderSlide',
  props: ['content'],
  methods: {
    url(){
      return this.content.ctaLink
    }
  }
}
</script>

<style lang="css" scoped>
  #slide{
    height: 320px;
  }

  .bloco-texto{
    margin-top: calc(-75px / 2);
  }

  img{
    height: 320px;
    width: 350px;
  }
</style>
