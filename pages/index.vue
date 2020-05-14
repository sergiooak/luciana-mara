<template>
  <div id="content">
    <SliderHome />
    <section>
      vantagens
    </section>
    <section>
      produtos em destaque
    </section>
    <section>
      categorias
    </section>
    <section>
      instagram
    </section>
  </div>
</template>

<script>
import SliderHome from '~/components/Home/SliderHome.vue';

export default {
  name: 'Home',
  components: {
    SliderHome
  }
}
</script>

<style>

</style>
