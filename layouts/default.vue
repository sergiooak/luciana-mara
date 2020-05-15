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
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

  @font-face {
    font-family: 'be';
    src:  url('../assets/fonts/BelleroseLight.woff2') format('woff2'),
          url('../assets/fonts/BelleroseLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  .font-be{
    font-family: 'be', sans-serif;
  }

  body{
    font-family: 'Jost', sans-serif;
    @apply bg-gray-200;
  }

  .site-wrapper{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
