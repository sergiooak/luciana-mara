<template lang="html">
  <main>
    {{ API_URL }}
    <hr />
    {{ TOKEN }}
  </main>
</template>

<script>
export default {
  data() {
    return {
      API_URL: this.$config.apiURL,
      TOKEN: this.$config.apiToken,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
