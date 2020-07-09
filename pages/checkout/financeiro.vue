<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-8" title="Financeiro" />
    <div class="container mx-auto flex flex-col md:flex-row items-start px-4 mb-12">
      <main class="w-full md:w-8/12 container mx-auto flex justify-center flex-wrap md:pr-8">
        <!-- {{ 'Session: ' + sessionID }}<br />
        {{ 'sender Hash: ' + senderHash }}
        {{ 'flag: ' + flag }} -->
        <img class="mb-8" src="https://stc.pagseguro.uol.com.br/public/img/banners/pagamento/todos_animado_550_50.gif" alt="Logotipos de meios de pagamento do PagSeguro" title="Este site aceita pagamentos com as principais bandeiras e bancos, saldo em conta PagSeguro e boleto.">
        <form @submit.prevent="erro = true" class="mt-8 w-full -mt-4">
          <div>
            <label class="block w-full">
              <span class="text-gray-700">Número do cartão</span>
              <input class="form-input mt-1 block w-full px-4 py-2"
                     @keyup="getFlag()"
                     v-model="cartao.numero"
                     v-mask="'#### #### #### ####'"
                     placeholder="Ex: 1234 5678 9000 0000"
                     required autofocus/>
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Nome (como impresso no cartão)</span>
              <input class="form-input mt-1 block w-full px-4 py-2 uppercase"
                     v-model="cartao.nome"
                     required />
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block mr-2 w-2/3">
              <span class="text-gray-700">Vencimento</span>
              <input class="form-input mt-1 block w-full px-4 py-2"
                     v-model="cartao.vencimento"
                     v-mask="'##/##'"
                     placeholder="Ex: 12/12"
                     required />
            </label>
            <label class="block ml-2 w-1/3">
              <span class="text-gray-700">CVV</span>
              <input class="form-input mt-1 block w-full px-4 py-2"
                     v-model="cartao.cvv"
                     v-mask="'###'"
                     placeholder="Ex: 000"
                     required />
            </label>
          </div>
          <input type="submit" name="button" class="mt-8 mb-12 bg-astronaut px-4 py-2 text-white uppercase" value="Finalizar pagamento">
        </form>
        <div class="w-full bg-blue-100 border-l-4 border-blue-600 text-blue-600 py-2 px-4">
          <p class="font-normal">Pagamento processado pela PagSeguro, seu cartão <strong class="font-bold">não</strong> ficará salvo em nossos banco de dados</p>
        </div>
        <div class="w-full bg-red-100 border-l-4 border-red-600 text-red-600 py-2 px-4">
          <strong class="text-red-800">Ops!</strong> O seu pagamento não foi aprovado, tente novamente mais tarde
        </div>
        <div class="w-full bg-green-100 border-l-4 border-green-600 text-green-600 py-2 px-4">
          <strong class="text-green-800">Sucesso!</strong> O seu pagamento foi aprovado! Você pode acompanhar o seu pedido aqui
        </div>
        <!-- {{ 'token do cartão: ' + cartao.token }} -->
      </main>
<!-- ìnicio da Lateral -->
      <aside class="w-full md:w-4/12 mt-8 md:mt-0 bg-white">
        <header class="p-4 uppercase text-gray-600 flex justify-between">
          <div>
          Seu pedido:
          </div>
          <div>
            000
          </div>
        </header>
        <div class="mb-8">
          <table class="w-full">
            <tbody class="border-b-2 border-gray-200">
              <tr v-for="pedido in cart" class="border-t-2 border-gray-200">
                <td class="py-2 pl-4 text-gray-700">{{ pedido.product.name  }} x {{ pedido.qtd }}</td>
                <td class="py-2 pr-4 text-right text-astronaut">{{ real(pedido.product.price * pedido.qtd)  }}</td>
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
            {{ real(frete.valor) }}
          </div>
        </div>
        <div class="px-4 py-2 flex justify-between items-center">
          <!-- input -->
        </div>
        <div class="p-4 flex justify-between items-center border-t-2 border-gray-400">
          <div>
            Total
          </div>
          <div>
            {{ real(valorTotalComFrete) }}
          </div>
        </div>
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
const convert = require('xml-js');
import HeadingSection from "~/components/HeadingSection.vue"

export default {
  name: 'Checkout',
  components: {
    HeadingSection,
  },
  data() {
    return {
      erro: false,
      sessionID: null,
      senderHash: null,
      cartao: {
        token: null,
        nome: '',
        numero: '',
        vencimento: '',
        cvv: '',
      },
      flag: ''
    }
  },
  computed: {
    order(){
      return this.$store.state.cart.order;
    },
    cart(){
      return this.$store.state.cart.items;
    },
    frete(){
      return this.$store.state.cart.frete;
    },
    valorTotal(){
      let total = 0
      for (var item of this.cart) {
        total = parseFloat(parseFloat(total) + (parseFloat(item.product.price) * item.qtd )).toFixed(2);
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
    getPaymentMethods(){
      PagSeguroDirectPayment.getPaymentMethods({
      	amount: parseFloat(this.valorTotal),
      	success: function(response) {
      	    // console.log(response);
      	},
      	error: function(response) {
      	    console.error(response);
      	}
      });
    },
    getSenderHash(){
      let vm = this;
      PagSeguroDirectPayment.onSenderHashReady(function(response){
        if(response.status == 'error') {
            console.error(response);
            return false;
        }
        // console.log(response);
        var hash = response.senderHash;
        vm.senderHash = hash;
      });
    },
    getFlag(){
      let vm = this;
      if (this.cartao.numero.length == 6){
        PagSeguroDirectPayment.getBrand({
          cardBin: vm.cartao.numero,
          success: function(response) {
            console.log(response);
            vm.flag = response.brand.name
          },
          error: function(response) {
            console.error(response);
          },
          complete: function(response) {
            //tratamento comum para todas chamadas
          }
        });
      }
    },
    createCardToken(){
      console.log('criando hash do cartão');
      let vm = this;
      PagSeguroDirectPayment.createCardToken({
         cardNumber: vm.cartao.numero, // Número do cartão de crédito
         brand: vm.flag, // Bandeira do cartão
         cvv: vm.cartao.cvv, // CVV do cartão
         expirationMonth: vm.cartao.mes, // Mês da expiração do cartão
         expirationYear: `20${vm.cartao.ano}`, // Ano da expiração do cartão, é necessário os 4 dígitos.
         success: function(response) {
            console.log(response);
            vm.cartao.token = response.card.token;
            vm.createTransaction();
         },
         error: function(response) {
      		console.error(response);
         },
         complete: function(response) {
              // Callback para todas chamadas.
         }
      });
    },
    createTransaction(){
      console.log('criando a transação');
    }

  },
  async mounted() {
    let proxy = 'https://cors-anywhere.herokuapp.com/'
    let EMAIL_PS = process.env.EMAIL_PS;
    let TOKEN_PS = process.env.TOKEN_PS;
    let obj = {
      method: 'HEAD',
      mode: 'no-cors',
  		headers: {
  			'Access-Control-Allow-Origin': '*'
  		},
    }

    let vm = this;

    vm.$axios
      .$post(`${proxy}https://ws.pagseguro.uol.com.br/v2/sessions?email=${EMAIL_PS}&token=${TOKEN_PS}`, obj)
      .then(function(res) {
        let json = convert.xml2json(res, {compact: true, spaces: 4});
        vm.sessionID = JSON.parse(json).session.id._text;
        PagSeguroDirectPayment.setSessionId(vm.sessionID);

        vm.getPaymentMethods();
        vm.getSenderHash();
      })
      .catch(function(error) {
        console.error(error);
        vm.sessionID = 'deu erro'
      });


  }
}
</script>

<style lang="css" scoped>
</style>
