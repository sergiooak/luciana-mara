<template lang="html">
  <div id="slide" class="flex flex-col md:flex-row justify-between items-center mx-auto">
    <div class="md:w-3/5 lg:w-1/2 bloco-texto flex flex-col justify-center pr-0 md:pr-8 lg:pr-0">
      <h1 class="text-3xl lg:text-4xl text-astronaut font-be text-center md:text-left leading-none">
        {{ content.title.rendered }}
      </h1>
      <h2 class="text-base lg:text-lg text-gray-800 font-bold leading-tight text-center md:text-left" v-html="content.content.rendered"></h2>
      <nuxt-link v-if="isInternal(content.acf.link_botao)" :to="url(content.acf.link_botao)" class="border-2 border-astronaut text-astronaut py-2 px-6 inline-block mt-2 md:mt-8 text-center">
        {{ content.acf.texto_bortao }}
      </nuxt-link>
      <a v-else :href="url(content.acf.link_botao)" class="border-2 border-astronaut text-astronaut py-2 px-6 inline-block mt-2 md:mt-8 text-center">
        {{ content.acf.texto_bortao }}
      </a>
    </div>
    <img :src="content.better_featured_image.source_url" alt="" class="lg:w-1/2 object-contain">
  </div>
</template>

<script>
export default {
  name: 'SliderSlide',
  props: ['content'],
  methods: {
    url(url){
      let str = url.replace('https://lucianamaraestudio.com.br','')
      return str
    },
    isInternal(url){
      // console.log(url);
      return url.includes("https://lucianamaraestudio.com.br") ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
  #slide{
    height: 440px;

    .bloco-texto{
      margin-top: 20px;
    }

    img{
      height: 250px;
      width: 270px;
    }

    @media(min-width: theme('screens.md')) {
      height: 320px;

      .bloco-texto{
        margin-top: calc(-75px / 2);
        max-width: 400px;
      }

      img{
        height: 320px;
        @apply w-2/5;
      }
    }

    @media(min-width: theme('screens.lg')) {
      img{
        width: 350px;
      }
    }
  }
</style>
