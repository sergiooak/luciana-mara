<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Entre em sua conta" />
    <main class="container mx-auto flex justify-center flex-wrap mb-16">
      <form @submit.prevent="login()" class="relative w-1/4">
        <label class="block">
          <span class="text-gray-700">E-mail</span>
          <input type="email" class="form-input mt-1 block w-full px-4 py-2" v-model="username">
        </label>
        <label class="block mt-4">
          <span class="text-gray-700">Senha</span>
          <input type="password" class="form-input mt-1 block w-full px-4 py-2" v-model="password">
        </label>
        <input type="submit" value="Acessar" class="form-input mt-8 block w-full px-4 py-2 bg-astronaut text-white hover:bg-mara cursor-pointer">
        <div v-if="loading" class="absolute inset-0 flex justify-center items-center bg-gray-200" style="--bg-opacity: .5">
          <Spinner class="absolute" />
        </div>
        <div v-if="error && !logou" class="mt-4 bg-red-100 border-l-4 border-red-600 text-red-700 text-center p-4">
          Usuário ou senha incorreto(s)
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"
import Spinner from '~/components/Spinner'

export default {
  name: 'Login',
  components: {
    Spinner,
    HeadingSection,
  },
  data() {
    return {
      username: 'sergiopcn@gmail.com',
      password: 'SergioOak!23Grilo',
      loading: false,
      error: false,
      logou: false
    }
  },
  methods: {
    async login() {
      let API_URL = process.env.API_URL;
      let vm = this;

      this.loading = true;

      let res = await vm.$axios
        .$post(`${API_URL}/wp-json/jwt-auth/v1/token`, {
          username: this.username,
          password: this.password
        })
        .then(function(res) {
          vm.logou = true;
          vm.error = false;
          vm.$store.dispatch("localStorage/login", res);
        }).catch(function (err){
          vm.error = true;
        }).finally(function (res) {
          vm.loading = false
        })
      // this.$store.dispatch("localStorage/login", {
      //   username: this.username,
      //   password: this.password
      // });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
