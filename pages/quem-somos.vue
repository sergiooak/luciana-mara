<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" :title="post.title.rendered" />
    <main class="container mx-auto flex flex-col items-center mb-16">
      <div v-html="post.content.rendered" class="text-center text-gray-800 md:w-8/12"></div>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'QuemSomos',
  asyncData({ params, $axios, payload }){
    if (payload) {
      return {post: payload}
    } else {
      return $axios.$get(`https://wplucianamara1.websiteseguro.com/wp-json/wp/v2/pages?slug=quem-somos`)
        .then((res) => {
          return {post: res[0]}
        })
    }
  },
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

<style lang="css">
  h2 strong{
    @apply text-lg text-mara;
  }
</style>
