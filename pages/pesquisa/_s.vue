<template lang="html">
  <div class="">
    <HeadingSection class="mt-12 mb-12" :title="'Resultados para: ' + $route.params.s" />
    <main class="container mx-auto flex flex-wrap">
      <div v-for="produto in results" class="w-1/4 px-4 mb-16">
        <Produto :product="produto" :titulo="produto.name" :categoria="produto.categoria" :preco="produto.price" :images="produto.images" :slug="produto.slug" />
      </div>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"
import Produto from "~/components/Produto.vue"

export default {
  name: 'Resultado',
  components: {
    HeadingSection,
    Produto
  },
  data() {
    return {
      results: []
    }
  },
  mounted() {
    const BASE_URL  = 'https://lucianamara.com.br';
    const API_URL   = 'https://wplucianamara1.websiteseguro.com'
    const TOKEN     = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BsdWNpYW5hbWFyYTEud2Vic2l0ZXNlZ3Vyby5jb20iLCJpYXQiOjE1OTAxNjEyMDMsIm5iZiI6MTU5MDE2MTIwMywiZXhwIjoxNTkwNzY2MDAzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.lx4UM48EoSQAaSstT9yKJx5mQD-xrrjF7_mZ58EAix4'

    let config = {
      headers: {
        'Authorization': 'Bearer ' + TOKEN
      }
    }
    let vm = this;

    vm.$axios
      .$get(`${API_URL}/wp-json/wc/v3/products?status=publish&search=${vm.$route.params.s}`, config)
      .then(function(res) {
        vm.results = res
      })
      .catch(function(error) {
          console.log(error);
      });
  },
}
</script>

<style lang="css" scoped>
</style>
