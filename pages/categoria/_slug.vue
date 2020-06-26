<template lang="html">
  <div>
    <HeadingSection class="mt-12 mb-12" :title="'Categoria: ' + $route.params.slug" />
    <main class="container mx-auto flex justify-center flex-wrap px-2 md:px-0">
      <div v-for="produto in products" class="w-1/2 md:w-1/4 px-2 mb-4 md:mb-16">
        <Produto :product="produto" :titulo="produto.name" :categoria="produto.categoria" :preco="produto.price" :images="produto.images" :slug="produto.slug" />
      </div>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"
import Produto from "~/components/Produto.vue"

export default {
  name: 'Categoria',
  components: {
    HeadingSection,
    Produto
  },
  async asyncData({ params, $axios, $config: {apiURL, apiToken} }){
    let API_URL = apiURL;
    let TOKEN = apiToken;
    let obj = {method: 'GET', headers: { 'Authorization': `Bearer ${TOKEN}`}}

    // Faz a requisição para descobrir a id da categoria pelo slug
    let category = await fetch(`${API_URL}/wp-json/wc/v3/products/categories?category=16&slug=${params.slug}`, obj)
      .then(res => res.json())
    let id = await category[0].id;

    let products = await fetch(`${API_URL}/wp-json/wc/v3/products?category=${id}&per_page=100`, obj)
      .then(res => res.json());

    return { products }
  }
}
</script>

<style lang="css" scoped>
</style>
