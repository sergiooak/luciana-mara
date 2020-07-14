<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-8" title="Financeiro" />
    <div class="container flex flex-col items-start px-4 mx-auto mb-12 md:flex-row">
      <main class="container flex flex-wrap justify-center w-full mx-auto md:w-8/12 md:pr-8">
        {{ 'Session: ' + sessionID }}<br />
        {{ 'sender Hash: ' + senderHash }}
        {{ 'flag: ' + flag }}
        <img class="mb-8" src="https://stc.pagseguro.uol.com.br/public/img/banners/pagamento/todos_animado_550_50.gif" alt="Logotipos de meios de pagamento do PagSeguro" title="Este site aceita pagamentos com as principais bandeiras e bancos, saldo em conta PagSeguro e boleto.">
        <form @submit.prevent="createCardToken" class="w-full">
          <div>
            <label class="block w-full">
              <span class="text-gray-700">Número do cartão</span>
              <input class="block w-full px-4 py-2 mt-1 form-input"
                     @keyup="getFlag()"
                     v-model="cartao.numero"
                     v-mask="'#### #### #### ####'"
                     placeholder="Ex: 1234 5678 9000 0000"
                     required autofocus/>
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block w-full mr-2">
              <span class="text-gray-700">Nome (como impresso no cartão)</span>
              <input class="block w-full px-4 py-2 mt-1 uppercase form-input"
                     v-model="cartao.nome"
                     required />
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block w-2/3 mr-2">
              <span class="text-gray-700">Vencimento</span>
              <input class="block w-full px-4 py-2 mt-1 form-input"
                     v-model="cartao.vencimento"
                     v-mask="'##/##'"
                     placeholder="Ex: 12/12"
                     required />
            </label>
            <label class="block w-1/3 ml-2">
              <span class="text-gray-700">CVV</span>
              <input class="block w-full px-4 py-2 mt-1 form-input"
                     v-model="cartao.cvv"
                     v-mask="'###'"
                     placeholder="Ex: 000"
                     required />
            </label>
          </div>
          <input type="submit" name="button" class="px-8 py-2 mt-8 mb-12 text-white uppercase rounded-none cursor-pointer bg-astronaut" value="Finalizar pagamento">
        </form>
        <div class="w-full px-4 py-2 text-blue-600 bg-blue-100 border-l-4 border-blue-600">
          <p class="font-normal">Pagamento processado pela PagSeguro, seu cartão <strong class="font-bold">não</strong> ficará salvo em nossos banco de dados</p>
        </div>
        <div class="w-full px-4 py-2 text-red-600 bg-red-100 border-l-4 border-red-600">
          <strong class="text-red-800">Ops!</strong> O seu pagamento não foi aprovado, tente novamente mais tarde
        </div>
        <div class="w-full px-4 py-2 text-green-600 bg-green-100 border-l-4 border-green-600">
          <strong class="text-green-800">Sucesso!</strong> O seu pagamento foi aprovado! Você pode acompanhar o seu pedido aqui
        </div>
        <!-- {{ 'token do cartão: ' + cartao.token }} -->
      </main>
<!-- ìnicio da Lateral -->
      <aside class="w-full mt-8 bg-white md:w-4/12 md:mt-0">
        <header class="flex justify-between p-4 text-gray-600 uppercase">
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
        <div class="flex items-center justify-between px-4 py-2">
          <div class="text-sm">Sub-total:</div>
          <div class="text-sm">{{ real(valorTotal) }}</div>
        </div>
        <div class="flex items-center justify-between px-4 py-2 border-t-2 border-gray-400">
          <div class="text-sm">
            Entrega
          </div>
          <div>
            {{ real(frete.valor) }}
          </div>
        </div>
        <div class="flex items-center justify-between px-4 py-2">
          <!-- input -->
        </div>
        <div class="flex items-center justify-between p-4 border-t-2 border-gray-400">
          <div>
            Total
          </div>
          <div>
            {{ real(valorTotalComFrete) }}
          </div>
        </div>
      </aside>
    </div>
    <div class="container flex justify-center mx-auto mb-12 md:justify-start">
      <nuxt-link to='/' class="px-4 py-2 uppercase border-2 text-astronaut border-astronaut">
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
      loading: true,
      erro: false,
      sessionID: null,
      senderHash: null,
      // cartao: {
      //   token: null,
      //   nome: '',
      //   numero: '',
      //   vencimento: '',
      //   cvv: '',
      // },
      cartao: {
        token: null,
        nome: 'marlene a ribeiro',
        numero: '5220',
        vencimento: '06/26',
        cvv: '628',
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
      if (this.cartao.numero.length == 7){
        PagSeguroDirectPayment.getBrand({
          cardBin: vm.cartao.numero.replace(' ',''),
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
         cardNumber: vm.cartao.numero.replace(/ /g, ''), //Remove espaços em branco da máscara do cartão
         brand: vm.flag,
         cvv: vm.cartao.cvv,
         expirationMonth: vm.cartao.vencimento.split('/')[0], 
         expirationYear: `20${vm.cartao.vencimento.split('/')[1]}`, // Ano da expiração do cartão, é necessário os 4 dígitos.
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
      let vm = this;
      let proxy = "https://cors-anywhere.herokuapp.com/";

      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

      let form = {
        paymentMode:                'default',
        paymentMethod:              'creditCard',
        receiverEmail:              'comprador@teste.com.br',
        currency:                   'BRL',
        extraAmount:                '1.00',
        itemId1:                    '0001',
        itemDescription1:           'NotebookPrata',
        itemAmount1:                '24300.00',
        itemQuantity1:              '1',
        notificationURL:            'https://sualoja.com.br/notifica.html',
        reference:                  'REF1234',
        senderName:                 'Jose Comprador',
        senderCPF:                  '22111944785',
        senderAreaCode:             '11',
        senderPhone:                '56273440',
        senderEmail:                'comprador@uol.com.br',
        senderHash:                 this.senderHash,
        shippingAddressStreet:      'Av.Brig.FariaLima',
        shippingAddressNumber:      '1384',
        shippingAddressComplement:  '5oandar',
        shippingAddressDistrict:    'JardimPaulistano',
        shippingAddressPostalCode:  '01452002',
        shippingAddressCity:        'SaoPaulo',
        shippingAddressState:       'SP',
        shippingAddressCountry:     'BRA',
        shippingType:               '3',
        shippingCost:               '1.00',
        creditCardToken:            this.cartao.token,
        installmentQuantity:        '5',
        installmentValue:           '125.22',
        noInterestInstallmentQuantity:  '2',
        creditCardHolderName:       'Jose Comprador',
        creditCardHolderCPF:        '22111944785',
        creditCardHolderBirthDate:  '27/10/1987',
        creditCardHolderAreaCode:   '11',
        creditCardHolderPhone:      '56273440',
        billingAddressStreet:       'Av.Brig.FariaLima',
        billingAddressNumber:       '1384',
        billingAddressComplement:   '5oandar',
        billingAddressDistrict:     'JardimPaulistano',
        billingAddressPostalCode:   '01452002',
        billingAddressCity:         'SaoPaulo',
        billingAddressState:        'SP',
        billingAddressCountry:      'BRA'
      };

      console.log(form);
      

      let body = [];

      for (let item in form) {
        let encodedKey = encodeURIComponent(item);
        let encodedValue = encodeURIComponent(form[item]);
        body.push(encodedKey + "=" + encodedValue);
      }
      body = body.join("&");
      

      this.loading = true;
      vm.$axios
        .$post(`${proxy}https://ws.pagseguro.uol.com.br/v2/transactions?email=${vm.$config.emailPS}&token=${vm.$config.tokenPS}`, body, config)
        .then(function(res) {
          vm.results = res
          vm.loading = false
        })
        .catch(function(error) {
            console.log(error);
        });
      
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
