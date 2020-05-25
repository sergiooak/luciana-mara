<template>
  <div class="site-wrapper flex items-center justify-center">
    Em breve...
  </div>
</template>

<script>
  import { FadeTransition } from 'vue2-transitions'
  import Header from '~/components/global/Header.vue';
  import Footer from '~/components/global/Footer.vue';

  export default {
    components: {
      FadeTransition,
      Header,
      Footer
    }
  }
</script>

<style>
@font-face {
    font-family: 'Jost';
    src:  url('../assets/fonts/Jost-SemiBold.woff2') format('woff2'),
          url('../assets/fonts/Jost-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

  @font-face {
    font-family: 'be';
    src:  url('../assets/fonts/BelleroseLight.woff2') format('woff2'),
          url('../assets/fonts/BelleroseLight.woff') format('woff');
    font-weight: 300;
    font-display: swap;
    font-style: normal;
  }

  .font-be{
    font-family: 'be', sans-serif;
  }

  body{
    font-family: 'Jost', serif;
    @apply bg-gray-200;
  }

  .site-wrapper{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
