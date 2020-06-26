<template>
  <div id="content">
    <SliderHome :slides="slides" />
    <Vantagens />
    <Destaques :trends="trends" />
    <!-- <Categorias /> -->
    <Instagram v-if="!loadingGrams" :grams="grams.graphql.user.edge_owner_to_timeline_media.edges" class="mb-8"/>
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
  async asyncData({ params, $axios, $config: {apiURL, apiToken} }){
    let API_URL = apiURL;
    let TOKEN = apiToken;
    let obj = {method: 'GET', headers: { 'Authorization': `Bearer ${TOKEN}`}}

    const slides = await fetch(`${API_URL}/wp-json/wp/v2/slides`, obj)
      .then(res => res.json());
    // const grams = await fetch(`https://www.instagram.com/lucianamaraestudio/?__a=1`)
    //   .then(res => res.json());
    const trends = await fetch(`${API_URL}/wp-json/wc/v3/products?per_page=4&featured=true`, obj)
      .then(res => res.json());

    return { slides, trends }
  },
  data(){
    return {
      grams: {},
      loadingGrams: true
    }
  },
  mounted() {
    let vm = this;
    vm.$axios.$get(`https://www.instagram.com/lucianamaraestudio/?__a=1`)
      .then(function (res){
        vm.grams = res
        vm.loadingGrams = false
      });
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
