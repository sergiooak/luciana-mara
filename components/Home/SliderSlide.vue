<template lang="html">
  <div id="slide" class="flex flex-col md:flex-row justify-between items-center mx-auto">
    <div class="bloco-texto flex flex-col justify-center">
      <h1 class="text-4xl text-astronaut font-be text-center md:text-left">
        {{ content.title.rendered }}
      </h1>
      <h2 class="text-lg text-gray-800 font-bold leading-tight text-center md:text-left" v-html="content.content.rendered"></h2>
      <nuxt-link v-if="isInternal(content.acf.link_botao)" :to="url(content.acf.link_botao)" class="border-2 border-astronaut text-astronaut py-2 px-6 inline-block mt-8 text-center">
        {{ content.acf.texto_bortao }}
      </nuxt-link>
      <a v-else :href="url(content.acf.link_botao)" class="border-2 border-astronaut text-astronaut py-2 px-6 inline-block mt-8 text-center">
        {{ content.acf.texto_bortao }}
      </a>
    </div>
    <img :src="content.better_featured_image.source_url" alt="" class="object-contain">
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
