<template>
  <div id="content">
    <SliderHome :slides="slides" />
    <Vantagens />
    <Destaques :trends="trends" />
    <!-- <Categorias /> -->
    <Instagram :grams="grams.graphql.user.edge_owner_to_timeline_media.edges" class="mb-8"/>
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
  async asyncData({ params, $axios }){
    let API_URL = process.env.API_URL;
    let TOKEN = process.env.TOKEN;
    let obj = {method: 'GET', mode: 'cors', headers: { 'Authorization': `Bearer ${TOKEN}`}}

    const slides = await fetch(`${API_URL}/wp-json/wp/v2/slides`, obj)
      .then(res => res.json());
    const grams = await fetch(`https://www.instagram.com/lucianamaraestudiodecostura/?__a=1`, obj)
      .then(res => res.json());
    const trends = await fetch(`${API_URL}/wp-json/wc/v3/products?per_page=4&featured=true`, obj)
      .then(res => res.json());

    return { slides, grams, trends }
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
