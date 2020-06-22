<template lang="html">
  <div class="">
    <HeadingSection class="my-8" title="Blog" />
    <main class="text-gray-700 body-font mb-16">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3" v-for="post in posts" :key="post.id">
            <div class="h-full shadow-lg overflow-hidden bg-white relative cursor-pointer">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="image(post.better_featured_image)" alt="blog">
              <div class="p-6">
                <a :href="link(post.slug)" class="title-font text-xl leading-tight font-medium text-mara mb-3"v-html="post.title.rendered">Título</a>
                <div class="leading-relaxed mb-3 text-sm leading-tight text-gray-700" v-html="post.excerpt.rendered">Resumo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Blog',
  async asyncData({ params, $axios }){
    let API_URL = process.env.API_URL;
    let TOKEN = process.env.TOKEN;
    let obj = {method: 'GET', mode: 'cors', headers: { 'Authorization': `Bearer ${TOKEN}`}}

    const posts = await fetch(`${API_URL}/wp-json/wp/v2/posts`, obj)
      .then(res => res.json());

    return { posts }
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
