<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Blog" />
    <main class="container mx-auto flex flex-col items-center mb-16">
      blog
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Blog',
  components: {
    HeadingSection,
  },
  methods: {
    login() {
      this.$store.dispatch("localStorage/login", {
        username: 'webmaster',
        password: 'YfX!O1zDSa5Y%6NS6v'
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
