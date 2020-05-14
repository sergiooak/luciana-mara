<template>
  <div class="site-wrapper">
    <Header />
    <nuxt class="flex-1" />
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/global/Header.vue';
  import Footer from '~/components/global/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  body{
    @apply bg-gray-200;
  }

  .site-wrapper{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
