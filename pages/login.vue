<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Entre em sua conta" />
    <main class="container mx-auto flex justify-center flex-wrap">
      <form @submit.prevent="login()" class="w-1/4">
        <label class="block">
          <span class="text-gray-700">E-mail</span>
          <input type="email" class="form-input mt-1 block w-full px-4 py-2" placeholder="">
        </label>
        <label class="block mt-4">
          <span class="text-gray-700">Senha</span>
          <input type="password" class="form-input mt-1 block w-full px-4 py-2" placeholder="">
        </label>
        <input type="submit" value="Acessar" class="form-input mt-8 block w-full px-4 py-2 bg-astronaut text-white hover:bg-mara cursor-pointer">
      </form>
    </main>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Login',
  components: {
    HeadingSection,
  },
  methods: {
    login() {
      this.$store.dispatch("localStorage/login", {
        username: 'webmaster',
        password: 'YfX!O1zDSa5Y%6NS6v'
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
