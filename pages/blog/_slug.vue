<template lang="html">
  <div class="">
    <HeadingSection class="my-8" :title="post.title.rendered" />
    <section class="text-gray-700 body-font">
      <div class="container px-5 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500">
          </div>
          <div class="mt-8 leading-relaxed text-lg mb-4" v-html="post.content.rendered"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Post',
  asyncData({ params, $axios, payload }){
    if (payload) {
      return {post: payload}
    } else {
      return $axios.$get(`https://wplucianamara1.websiteseguro.com/wp-json/wp/v2/posts?slug=${params.slug}`)
        .then((res) => {
          return {post: res[0]}
        })
    }
  },
  components: {
    HeadingSection,
  },
  methods: {
    image(img_obj){
      // console.log(img_obj);
      return img_obj !== null ? img_obj.source_url : "https://dummyimage.com/720x400"
    },
    link(slug){
      return `/blog/${slug}`
    }
  }
}
</script>

<style lang="css" scoped>
</style>
