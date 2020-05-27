<template>
  <header class="bg-white border-t-4 border-mara shadow-lg relative">
    <div class="container mx-auto flex justify-between h-full items-center">
      <div class="w-1/2 flex justify-start items-center">
        <div class="">
          <nuxt-link to="/">
            <img src="/logo/logo-horizontal.svg" style="height: 75px;" alt="Luciana Mara - Estúdio de Costura">
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
            <span class="cursor-pointer">Todos os produtos</span>
          </div>
          <slide-y-up-transition>
            <DropdownCategorias v-show="mostraCategorias" />
          </slide-y-up-transition>
          <div class="text-astronaut ml-6 cursor-pointer">
            Clientes.
          </div>
        </div>
      </div>
      <div class="w-1/2 flex justify-end items-center">
        <div class="mr-8">
          <form @submit.prevent="onSubmit" class="flex h-12">
            <input v-model="s" type="text" placeholder="Pesquisar..." class="bg-gray-300 pl-6 rounded-l-full">
            <button type="submit" title="Pesquisar" class="bg-gray-300 flex items-center justify-center rounded-r-full px-4">
              <svg class="text-gray-600" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor" /></svg>
            </button>
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
      s: null
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
          // console.log("fecha o hover");
          clearInterval(chekingLoop);
        }else{
          // console.log('mantem aberto');
        }
      },1000);
    },
    onSubmit(){
      this.$router.push(`/pesquisa/${this.s}`)
      this.s = null
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
