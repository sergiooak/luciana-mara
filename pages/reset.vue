<template lang="html">
  <main class="flex justify-center mt-8">
    <button @click="test" type="button" name="button">Teste</button>
  </main>
</template>

<script>
export default {
  methods: {
    test(){
      this.$store.commit('localStorage/test')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
