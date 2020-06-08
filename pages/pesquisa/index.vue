<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-8" title="Pesquisa" />
    <main class="container mx-auto flex justify-center flex-wrap">
      <h1 class="text-center px-12">Utilize o campo abaixo para procurar um produto.</h1>
      <form @submit.prevent="onSubmit" class="flex flex-col items-center ">
        <input v-model="s" type="text" placeholder="Pesquisar..." class="focus:outline-none bg-gray-300white px-4 py-2 border-2 border-gray-400 mt-8">
        <button type="submit" title="Pesquisar" class="focus:outline-none bg-gray-300 flex items-center justify-center px-4 bg-astronaut text-white uppercase px-4 py-2 mt-4 mb-16 w-full">
          Pesquisar
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Pesquisa',
  components: {
    HeadingSection,
  },
  data: function (){
    return {
      s: null
    }
  },
  methods: {
    onSubmit(){
      this.$router.push(`/pesquisa/${this.s}`)
      this.s = null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
