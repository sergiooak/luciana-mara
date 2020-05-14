<template>
  <header class="bg-white border-t-4 border-mara shadow-lg relative">
    <div class="container mx-auto flex justify-between h-full items-center">
      <div class="w-1/2 flex justify-start items-center">
        <div class="">
          <nuxt-link to="/">
            <img src="logo/logo-horizontal.svg" style="height: 75px;" alt="Luciana Mara - Estúdio de Costura">
          </nuxt-link>
        </div>
        <div class="ml-6 flex">
          <div class="text-astronaut cursor-pointer">
            Todos os uniformormes
          </div>
          <div class="text-astronaut ml-4 cursor-pointer">
            Clientes
          </div>
        </div>
      </div>
      <div class="w-1/2 flex justify-end items-center">
        <div class="mr-8">
          <form class="flex h-12">
            <input type="text" placeholder="Pesquisar..." class="bg-gray-300 pl-6 rounded-l-full">
            <input type="submit" class="bg-transparent bg-gray-300 w-12 rounded-r-full" value="P">
          </form>
        </div>
        <CarrinhoHeader />
      </div>
    </div>
  </header>
</template>

<script>
import CarrinhoHeader from '~/components/global/Header/CarrinhoHeader.vue';

export default {
  name: 'Header',
  components: {
    CarrinhoHeader
  }
}
</script>

<style lang="scss" scoped>
  header{
    height: 96px;
    z-index: +1;
  }

</style>
