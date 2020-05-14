<template lang="html">
  <section class="slider">
    <div class="container mx-auto">
      <div class="w-9/12 flex justify-between items-center mx-auto">
        <div class="bloco-texto">
          <h1 class="text-xl text-astronaut">Blusa Classic</h1>
          <h2 class="text-lg text-gray-600 font-bold w-3/4 leading-tight">
            Sub-título chamativo para explicar alguma novidade ou não!
          </h2>
          <nuxt-link to="/" class="border-2 border-astronaut text-astronaut py-2 px-6 inline-block mt-8">
            Veja mais detalhes!
          </nuxt-link>
        </div>
        <img src="slider/slider-demo.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'homeSlider'
  }
</script>

<style lang="css" scoped>
  .slider{
    height: 320px;
    background-image: url('/slider-bg.svg');
    background-size: cover;
  }

  .bloco-texto{
    margin-top: calc(-75px / 2);
  }

  img{
    height: 320px;
    width: 350px;
  }
</style>
