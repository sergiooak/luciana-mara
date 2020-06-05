<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-16" title="Checkout" />
    <div class="container mx-auto flex items-start px-4 mb-12">
      <main class="w-8/12 container mx-auto flex justify-center flex-wrap pr-8">
        <form class="w-full -mt-4">
          <div>
            <label class="block w-full">
              <span class="text-gray-700">E-mail</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Nome</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block ml-2 w-full">
              <span class="text-gray-700">Sobrenome</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex w-full mt-8 pt-4 border-t-2 border-gray-400">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Endereço</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block ml-2 w-full">
              <span class="text-gray-700">Número</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Bairro</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block ml-2 w-full">
              <span class="text-gray-700">Cidade</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">CEP</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex w-full mt-8 pt-4 border-t-2 border-gray-400">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Endereço</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block ml-2 w-full">
              <span class="text-gray-700">Número</span>
              <input class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
        </form>
      </main>
      <aside class="w-4/12 bg-white">
        <header class="p-4 uppercase">
          Seu pedido:
        </header>
        <div class="mb-12">
          <table class="w-full">
            <tbody class="border-b-2 border-gray-300">
              <tr v-for="pedido in cart" class="border-t-2 border-gray-300">
                <td class="py-2 pl-4">{{ pedido.product.name  }} x {{ pedido.qtd }}</td>
                <td class="py-2 pr-4 text-right">{{ real(pedido.product.price * pedido.qtd)  }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-4 py-2 flex justify-between items-center">
          <div class="text-sm">Sub-total:</div>
          <div class="text-sm">{{ real(valorTotal) }}</div>
        </div>
        <div class="px-4 py-2 flex justify-between items-center border-t-2 border-gray-400">
          <div class="text-sm">
            Entrega
          </div>
          <div>
            a definir
          </div>
        </div>
        <div class="p-4 flex justify-between items-center border-t-2 border-gray-400">
          <div>
            Total
          </div>
          <div>
            {{ real(valorTotal) }}
          </div>
        </div>
      </aside>
    </div>
    <div class="container mx-auto mb-12">
      <nuxt-link to='/' class="px-4 py-2 uppercase text-astronaut border-2 border-astronaut">
        Voltar para a loja
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Login',
  components: {
    HeadingSection,
  },
  computed: {
    cart(){
      return this.$store.state.cart.items;
    },
    valorTotal(){
      let total = 0
      for (var item of this.cart) {
        total = parseFloat(parseFloat(total) + (parseFloat(item.product.price) * item.qtd )).toFixed(2);
      }
      return total;
    }
  },
  methods: {
    real(valor){
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
