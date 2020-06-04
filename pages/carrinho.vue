<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Carrinho" />
    <main class="container mx-auto flex justify-center flex-wrap">
      {{ cart }}
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Login',
  components: {
    HeadingSection,
  },
  computed: {
    cart(){
      return this.$store.state.cart.items;
    },
  },
}
</script>

<style lang="css" scoped>
</style>
