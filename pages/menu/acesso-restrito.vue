<template lang="html">
  <div class="min-h-screen">
    <main class="container mx-auto flex flex-col justify-between" style="height: calc(100vh - 150px);">
      <div>
        <div class="flex flex-col items-center mt-4">
          <h1>Acesso Restrito</h1>
          <nuxt-link to="/acesso-restrito/unimed" class="flex justify-between items-center my-2 text-astronaut">
            <span>
              Unimed
            </span>
          </nuxt-link>
          <nuxt-link to="/acesso-restrito/sabin" class="flex justify-between items-center my-2 text-astronaut">
            <span>
              Sabin
            </span>
          </nuxt-link>
          <nuxt-link to="/acesso-restrito/agendamento" class="flex justify-between items-center my-2 text-astronaut">
            <span>
              Agendamento do Mostruario
            </span>
          </nuxt-link>
          <nuxt-link to="/acesso-restrito/download" class="flex justify-between items-center my-2 text-astronaut">
            <span>
              Download
            </span>
          </nuxt-link>
        </div>
      </div>
      <footer class="flex justify-center">
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
      </footer>
    </main>
  </div>
</template>

<script>
import CarrinhoHeader     from '~/components/global/Header/CarrinhoHeader.vue';

export default {
  name: 'Menu',
  components: {
    CarrinhoHeader,
  },
  data() {
    return{

    }

  },
  methods: {

  },
  computed: {
    user(){
      return this.$store.state.localStorage.user;
    }
  },
}
</script>

<style lang="css" scoped>
</style>
