<template>
  <div class="site-wrapper">
    <Header />
    <fade-transition>
      <nuxt class="flex-1 pt-20 md:pt-0" />
    </fade-transition>
    <div id="whatsapp">
      <a href="https://api.whatsapp.com/send?phone=5534992141968" target="_blank">
        <img src="https://lh3.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN" alt="Fale conosco pelo WhatsApp">
      </a>
    </div>
    <Footer />
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
    },

    mounted() {
      this.$store.dispatch("categories/retrieve");
      this.$store.dispatch("products/retrieve");
      this.$store.dispatch("instagram/retrieve");
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

  #whatsapp{
    position: fixed;
    width: 50px;
    height: 50px;
    z-index: 9999;
    bottom: 20px;
    right: 20px;
    border-radius: 99px;
    overflow: hidden;
    border: 3px solid white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
</style>
