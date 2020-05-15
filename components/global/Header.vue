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
          <div   id="mostraCategorias"
                class="text-astronaut relative flex justify-between items-center focus:shadow-none focus:outline-none
                transition-color ease duration-300 hover:text-mara"
                tabindex="0" role="button"
                :aria-pressed="mostraCategorias"
                @mouseover="mostraCategorias = true"
                @mouseleave="checaHover()">
            <svg class="h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="currentColor" /><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" /><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="currentColor" /></svg>
            <span class="cursor-pointer">Todos os uniformes</span>
          </div>
          <slide-y-up-transition>
            <DropdownCategorias v-show="mostraCategorias" />
          </slide-y-up-transition>
          <div class="text-astronaut ml-6 cursor-pointer">
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
import CarrinhoHeader     from '~/components/global/Header/CarrinhoHeader.vue';
import DropdownCategorias from '~/components/global/Header/DropdownCategorias.vue';
import { SlideYUpTransition } from 'vue2-transitions'

export default {
  name: 'Header',
  components: {
    CarrinhoHeader,
    DropdownCategorias,
    SlideYUpTransition
  },
  data: function (){
    return {
      mostraCategorias: false,
    }
  },
  methods: {
    checaHover(){
      let vm = this;
      let chekingLoop = setInterval(function (){
        let isHoveringCategorias = document.querySelector( "#mostraCategorias:hover" );
        let isHoveringDropdownCategorias = document.querySelector('#DropdownCategorias:hover')
        if (!isHoveringCategorias && !isHoveringDropdownCategorias){
          vm.mostraCategorias = false;
          console.log("fecha o hover");
          clearInterval(chekingLoop);
        }else{
          console.log('mantem aberto');
        }
      },1000);
    }
  },
  mounted: function (){

  }
}
</script>

<style lang="scss" scoped>
  header{
    height: 96px;
    z-index: +1;
  }

</style>
