<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-8" title="Todos os Produtos" />
    <main class="container mx-auto flex flex-wrap">
      <div v-for="produto in products" class="w-1/2 md:w-1/4 px-2 md:px-4 mb-4 md:mb-16">
        <Produto :product="produto" :titulo="produto.name" :categoria="produto.categoria" :preco="produto.price" :images="produto.images" :slug="produto.slug" />
      </div>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"
import Produto from "~/components/Produto.vue"

export default {
  name: 'TodosOsProdutos',
  components: {
    HeadingSection,
    Produto
  },
  async asyncData({ params, $axios, $config: {apiURL, apiToken} }){
    let API_URL = apiURL;
    let TOKEN = apiToken;
    let obj = {method: 'GET', headers: { 'Authorization': `Bearer ${TOKEN}`}}

    const products = await fetch(`${API_URL}/wp-json/wc/v3/products?status=publish&per_page=100`, obj)
      .then(res => res.json());

    return { products }
  },
}
</script>

<style lang="css" scoped>
</style>
