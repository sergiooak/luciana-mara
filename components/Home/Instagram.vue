<template lang="html">
  <section class="destaques">
    <HeadingSection class="mt-16 mb-8" title="Instagram" />
    <div class="flex">
      <div v-for="(gram, i) of grams" :key="gram.node.id" class="gram" :class="'gram-' + (i + 1)">
        <a :href="'https://www.instagram.com/p/'+ gram.node.shortcode +'/'" target="_blank">
          <img :src="gram.node.thumbnail_resources[3].src" alt="">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import HeadingSection from "~/components/HeadingSection.vue"
  export default {
    name: 'Instagram',
    components: {
      HeadingSection
    },
    computed: {
      grams(){
        return this.$store.state.instagram.items;
      },
      isLoading(){
        return this.$store.state.instagram.loading;
      }
    },
  }
</script>

<style lang="css" scoped>
  .gram-10,
  .gram-11,
  .gram-12{
    display: none;
  }
  @media (max-width: 1920px) {
    .gram-7,
    .gram-8,
    .gram-9{
      display: none;
    }
  }
  @media (max-width: 1024px) {
    .gram-6{
      display: none;
    }
  }
</style>
