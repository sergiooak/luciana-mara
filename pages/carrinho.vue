<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-8" title="Carrinho" />
    <div class="container mx-auto flex flex-col md:flex-row items-start px-4 mb-12">
      <main class="w-full md:w-8/12 container mx-auto flex justify-center flex-wrap md:pr-8 border-b-2 border-gray-400">
        <div class="w-full overflow-x-auto" style="width: 900px;">
          <table class="overflow-x-auto w-full" style="min-width: 800px">
            <thead>
              <tr>
                <th class="text-xl text-gray-800 text-left">Produtos</th>
                <th class="text-xl text-gray-800 text-left">Preço</th>
                <th class="text-xl text-gray-800 text-left">Quantidade</th>
                <th class="text-xl text-gray-800 text-left w-32">Sub-Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pedido in cart" class="border-t-2 border-gray-400">
                <td class="py-6">{{ pedido.product.name  }}</td>
                <td class="py-6">{{ real(pedido.product.price)  }}</td>
                <td class="py-6">
                  <input type="number" class="form-input px-4 py-2 text-center" :value="pedido.qtd" disabled />
                </td>
                <td class="py-6 w-32">{{ real(pedido.product.price * pedido.qtd)  }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <aside class="w-full md:w-4/12 bg-white mt-8 md:mt-0">
        <div class="p-4 flex justify-between items-center">
          <div>Sub-total:</div>
          <div>{{ real(valorTotal) }}</div>
        </div>
        <div class="p-4 pb-0 flex justify-between items-center border-t-2 border-gray-400">
          <div>
            Entrega
          </div>
          <div>
            <label class="block mt-4 border-2 border-gray-300 p-2 pt-1">
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
        <div class="p-4 flex justify-between items-center border-t-2 border-gray-400">
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
