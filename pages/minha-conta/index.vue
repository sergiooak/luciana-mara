<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Minha Conta" />
    <section class="container mx-auto flex flex-wrap px-4">
      <aside class="w-3/12 bg-white shadow-lg p-4">
        <div>
          menu aqui
        </div>
        <footer class="flex border-t-2 border-gray-400 -m-4 mt-0 p-4 cursor-pointer text-mara bg-white hover:bg-mara hover:text-white" @click="logout()">
          <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z" fill="currentColor" /><path d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z" fill="currentColor" /></svg>
          <span>
            Sair
          </span>
        </footer>
      </aside>
      <main>
        {{ user }}
      </main>
    </section>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'MinhaConta',
  components: {
    HeadingSection,
  },
  methods: {
    logout() {
      this.$store.dispatch("localStorage/logout");
    }
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
