<template>
  <header id="main-header">
    <div class="container mx-auto flex justify-between h-full items-center px-4">
      <div class="md:hidden pl-2 text-astronaut">
        <nuxt-link to="/pesquisa">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor" /></svg>
        </nuxt-link>
      </div>
      <div class="md:w-7/12 lg:w-5/12 xl:w-1/2 flex justify-start items-center">
        <div class="">
          <nuxt-link to="/">
            <img  src="/logo/logo-horizontal.svg"
                  class="h-12 xl:h-16"
                  alt="Luciana Mara Estúdio de Costura">
          </nuxt-link>
        </div>
        <div class="ml-4 xl:ml-6 relative hidden md:flex">
          <div  id="mostraCategorias"
                class="text-astronaut relative flex justify-between items-center focus:shadow-none focus:outline-none
                transition-color ease duration-300 hover:text-mara"
                tabindex="0" role="button"
                :aria-pressed="mostraCategorias"
                @mouseover="mostraCategorias = true"
                @mouseleave="checaHover()">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="currentColor" /><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" /><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="currentColor" /></svg>
            <span class="cursor-pointer">Todos os produtos</span>
          </div>
          <slide-y-up-transition>
            <DropdownCategorias v-show="mostraCategorias" />
          </slide-y-up-transition>
          <div  id="mostraClientes"
                class="text-astronaut ml-4 lg:ml-6 cursor-pointer"
                tabindex="0" role="button"
                :aria-pressed="mostraClientes"
                @mouseover="mostraClientes = true"
                @mouseleave="checaClientes()">
            <span>Clientes</span>
          </div>
          <slide-y-up-transition>
            <DropdownClientes v-on:fechaClientes="mostraClientes = false" v-show="mostraClientes" />
          </slide-y-up-transition>
        </div>
      </div>
      <div class="md:hidden pr-2 text-astronaut">
        <nuxt-link to="/menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" /><path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" /><path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor" /></svg>
        </nuxt-link>
      </div>
      <div class="md:w-5/12 lg:w-7/12 xl:w-1/2 hidden md:flex justify-end items-center">
        <div class="mr-2 xl:mr-8">
          <div class="lg:hidden text-astronaut border-r-2 border-gray-300 pr-4">
            <nuxt-link to="/pesquisa">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor" /></svg>
            </nuxt-link>
          </div>
          <form @submit.prevent="onSubmit" class="hidden lg:flex h-12">
            <input v-model="s" type="text" placeholder="Pesquisar..." class="focus:outline-none bg-gray-300 pl-6 rounded-l-full">
            <button type="submit" title="Pesquisar" class="focus:outline-none bg-gray-300 flex items-center justify-center rounded-r-full px-4">
              <svg class="text-gray-600" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor" /></svg>
            </button>
          </form>
        </div>
        <div v-if="typeof user !== 'undefined'" class="mr-4 pr-4 border-r-2 border-gray-400">
          <nuxt-link v-if="!user.logado" to="/login" class="flex items-center cursor-pointer text-astronaut hover:text-mara">
            <svg class="w-6 h-6 mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="currentColor" /><path d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z" fill="currentColor" /></svg>
            <span>
              Fazer Login
            </span>
          </nuxt-link>
          <nuxt-link v-else to="/minha-conta" class="flex items-center cursor-pointer text-astronaut hover:text-mara">
            <svg class="w-6 h-6 mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="currentColor" /><path d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z" fill="currentColor" /></svg>
            <span>
              Minha Conta
            </span>
          </nuxt-link>
        </div>
        <CarrinhoHeader />
      </div>
    </div>
  </header>
</template>

<script>
import CarrinhoHeader     from '~/components/global/Header/CarrinhoHeader.vue';
import DropdownCategorias from '~/components/global/Header/DropdownCategorias.vue';
import DropdownClientes from '~/components/global/Header/DropdownClientes.vue';
import { SlideYUpTransition } from 'vue2-transitions'

export default {
  name: 'Header',
  components: {
    CarrinhoHeader,
    DropdownCategorias,
    DropdownClientes,
    SlideYUpTransition
  },
  data: function (){
    return {
      mostraCategorias: false,
      mostraClientes: false,
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
    checaClientes(){
      let vm = this;
      let chekingLoopClientes = setInterval(function (){
        let isHoveringClientes = document.querySelector( "#mostraClientes:hover" );
        let isHoveringDropdownCategorias = document.querySelector('#DropdownClientes:hover')
        if (!isHoveringClientes && !isHoveringDropdownCategorias){
          vm.mostraClientes = false;
          clearInterval(chekingLoopClientes);
        }else{
        }
      },1000);
    },
    onSubmit(){
      this.$router.push(`/pesquisa/${this.s}`)
      this.s = null
    }
  },
  computed: {
    user(){
      return this.$store.state.localStorage.user;
    }
  },
}
</script>

<style lang="scss">
  #main-header{
    @apply w-full h-16 bg-white border-t-4 border-mara shadow-lg fixed fixed z-50;

    @media(min-width: theme('screens.md')) {
      @apply h-20 relative;
    }
  }
</style>
