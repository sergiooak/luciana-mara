<template lang="html">
  <div id="slide" class="flex flex-col md:flex-row justify-between items-center mx-auto">
    <div class="bloco-texto flex flex-col justify-center">
      <h1 class="text-4xl text-astronaut font-be text-center md:text-left">
        {{ content.titulo }}
      </h1>
      <h2 class="text-lg text-gray-800 font-bold leading-tight text-center md:text-left">
        {{ content.conteudo }}
      </h2>
      <nuxt-link :to="url()" class="border-2 border-astronaut text-astronaut py-2 px-6 inline-block mt-8 text-center">
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

  @media (max-width: 640px) {
    #slide{
      height: 440px;
    }

    .bloco-texto{
      margin-top: 20px;
    }

    img{
      height: 250px;
      width: 270px;
    }
  }
</style>
