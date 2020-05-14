<template>
  <div id="content">
    <SliderHome />
    <Vantagens />
    <section class="mt-8 flex justify-center">
      <div class="container flex flex-wrap">
        <div class="w-1/4 px-4">
          <div class="bg-white shadow">
            1
          </div>
        </div>
        <div class="w-1/4 px-4">
          <div class="bg-white shadow">
            1
          </div>
        </div>
        <div class="w-1/4 px-4">
          <div class="bg-white shadow">
            1
          </div>
        </div>
        <div class="w-1/4 px-4">
          <div class="bg-white shadow">
            1
          </div>
        </div>
        <div class="w-1/4 px-4">
          <div class="bg-white shadow">
            1
          </div>
        </div>
        <div class="w-1/4 px-4">
          <div class="bg-white shadow">
            1
          </div>
        </div>
      </div>
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
import Vantagens from '~/components/Home/Vantagens.vue';

export default {
  name: 'Home',
  components: {
    SliderHome,
    Vantagens
  }
}
</script>

<style>

</style>
