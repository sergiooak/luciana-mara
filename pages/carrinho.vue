<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-8" title="Carrinho" />
    <div class="container mx-auto flex flex-col md:flex-row items-start px-4 mb-12">
      <main class="w-full md:w-8/12 container mx-auto flex justify-center flex-wrap md:pr-8">
        <div class="w-full overflow-x-auto" style="width: 900px;">
          <table class="overflow-x-auto w-full" style="min-width: 800px">
            <thead class="border-b-2 border-gray-500">
              <tr>
                <th class="pb-4 text-xl text-astronaut uppercase text-left">&nbsp;</th>
                <th class="pb-4 text-xl text-astronaut uppercase text-left">Produtos</th>
                <th class="pb-4 text-xl text-astronaut uppercase text-left">Preço</th>
                <th class="pb-4 text-xl text-astronaut uppercase text-center">Quantidade</th>
                <th class="pb-4 text-xl text-astronaut uppercase text-right w-32">Sub-Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pedido in cart" class="border-b-2 border-gray-300">
                <td class="py-6 pr-4">
                  <button @click="remove(pedido.uniqueId)" title="Remover este produto do carrinho" class="text-gray-400 hover:text-red-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z" fill="currentColor" /></svg>
                  </button>
                </td>
                <td class="py-6 text-gray-800 uppercase ml-2">{{ pedido.product.name + ' (' + pedido.tamanho + ')' }}</td>
                <td class="py-6 text-gray-700">{{ real(pedido.product.price)  }}</td>
                <td class="py-6 flex justify-center">
                  <input type="number" class="form-input px-4 py-2 text-center text-gray-700" :value="pedido.qtd" disabled />
                </td>
                <td class="py-6 w-32 text-right text-gray-800 font-bold">{{ real(pedido.product.price * pedido.qtd)  }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <aside class="w-full md:w-4/12 bg-white mt-8 md:mt-0">
        <div class="p-4 flex justify-between items-center">
          <div class="text-gray-500">Sub-total:</div>
          <div class="text-gray-700">{{ real(valorTotal) }}</div>
        </div>
        <div class="p-4 pb-0 flex flex-col border-t-2 border-gray-200">
          <div>
            <div class="bg-green-100 border-l-4 border-green-600 text-green-800 px-4 py-2 text-sm leading-tight mb-4">
              Calcule o frete do pedido utlizando o formulário abaixo, opções especiais para pessoas de Uberlândia/MG
            </div>
          </div>
          <div class="">
            <div>
              Tipo de entrega
            </div>
            <div>
              <label class="block border-2 border-gray-300 p-2">
                <select class="form-select mt-1 block w-full" v-model="frete.tipo" @change="calculaFrete()">
                  <option value="" disabled selected>Selecione</option>
                  <option value="pac">Correios PAC</option>
                  <option value="sedex">Correios SEDEX</option>
                  <option value="retirada">Retirada na loja</option>
                  <option value="moto">Entrega em Uberlândia</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div class="px-4 h-24 flex justify-end items-center">
          <div class="flex-1 mr-16" v-if="frete.tipo !== 'retirada' && frete.tipo !== 'moto'">
            <label class="block">
              <span class="text-gray-700">CEP</span>
              <input class="form-input mt-1 block w-full border-2 border-gray-300 px-4 py-2" placeholder="000000-000">
            </label>
          </div>
          <div class="flex flex-col justify-center items-center">

            <div>
              {{ frete.prazo + (frete.prazo > 1 ? ' dias úteis' : ' dia útil') }}
            </div>
            <div class="text-right">
              {{ real(frete.valor) }}
            </div>
          </div>
        </div>
        <div class="p-4 flex justify-between items-center border-t-2 border-gray-200">
          <div>
            Total
          </div>
          <div>
            {{ real(valorTotalComFrete) }}
          </div>
        </div>
        <footer>
          <button type="button" name="button" class="bg-astronaut uppercase text-white w-full p-4 text-center" @click="$router.push('/checkout')">
            Fazer checkout
          </button>
        </footer>
      </aside>
    </div>
    <div class="container mx-auto mb-12 flex justify-center md:justify-start">
      <nuxt-link to='/' class="px-4 py-2 uppercase text-astronaut border-2 border-astronaut">
        Voltar para a loja
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Carrinho',
  components: {
    HeadingSection,
  },
  data() {
    return {
      frete: {
        cep: '',
        prazo: 0,
        valor: 0,
        tipo: ''
      }
    }
  },
  computed: {
    cart(){
      return this.$store.state.cart.items;
    },
    valorTotal(){
      let total = 0
      if (typeof this.cart !== 'undefined') {
        for (var item of this.cart) {
          total = parseFloat(parseFloat(total) + (parseFloat(item.product.price) * item.qtd )).toFixed(2);
        }
      }
      return total;
    },
    valorTotalComFrete(){
      let total = 0
      if (typeof this.cart !== 'undefined') {
        for (var item of this.cart) {
          total = parseFloat(parseFloat(total) + (parseFloat(item.product.price) * item.qtd )).toFixed(2);
        }
      }
      return parseFloat(parseFloat(total) + parseFloat(this.frete.valor));
    }
  },
  methods: {
    real(valor){
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
    },
    calculaFrete(){
      if (this.frete.tipo == 'retirada') {
        this.frete.prazo = 1
        this.frete.valor = 0.0
      }else if (this.frete.tipo == 'moto'){
        this.frete.prazo = 1
        this.frete.valor = 15.0
      }
    },
    remove(id){
      this.$store.dispatch("cart/remove", id);
    }
  },
  watch: {
    'frete.valor'(){
      this.$store.dispatch("cart/updateFrete", this.frete);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
