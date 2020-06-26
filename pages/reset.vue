<template lang="html">
  <main>
    Para pessoas que visitaram a versão antiga do site e adicionaram algum produto ao carrinho, pode acontecer um bug que deixa a página do carrinho em branco, para resolver o problema é simples, basta clicar no botão abaixo
    <button type="button" name="button" class="bg-astronaut px-4 py-2 uppercase text-white">
      Resetar o carrinho
    </button>
    <hr />

  </main>
</template>

<script>
let API_URL = process.env.API_URL;
let TOKEN = process.env.TOKEN;

console.log(API_URL);
console.log(TOKEN);
export default {
  methods: {
    reset() {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
