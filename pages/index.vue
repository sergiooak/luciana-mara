<template>
  <div id="content" class="flex items-center justify-center">
    Em breve...
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
  components: {
    SliderHome,
    Vantagens,
    Destaques,
    Categorias,
    Instagram
  }
}
</script>

<style>

</style>
