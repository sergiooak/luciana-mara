<template>
  <div id="content">
    <SliderHome :slides="slides" />
    <Vantagens />
    <Destaques />
    <!-- <Categorias /> -->
    <Instagram class="mb-8"/>
  </div>
</template>

<script>
import SliderHome from '~/components/Home/SliderHome.vue';
import Vantagens from '~/components/Home/Vantagens.vue';
import Destaques from '~/components/Home/Destaques.vue';
import Categorias from '~/components/Home/Categorias.vue';
import Instagram from '~/components/Home/Instagram.vue';

export default {
  name: 'Home',
  asyncData({ params, $axios, payload }){
    if (payload) {
      return {slides: payload.slides}
    } else {
      return $axios.$get(`https://wplucianamara1.websiteseguro.com/wp-json/wp/v2/slides`)
        .then((res) => {
          return {slides: res}
        })
    }
  },
  components: {
    SliderHome,
    Vantagens,
    Destaques,
    Categorias,
    Instagram
  },
}
</script>

<style>

</style>
