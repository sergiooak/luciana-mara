<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-8" title="Checkout" />
    <div class="container relative flex flex-col items-start px-4 mx-auto mb-12 md:flex-row">
      <div v-if="loading" class="absolute inset-0 flex flex-col items-center justify-center bg-gray-200" style="--bg-opacity: .75">
        <Spinner class="-mt-4" />
        <div v-if="!sucesso" class="w-64 px-4 py-2 mt-8 text-center bg-white text-astronaut">
          Por favor aguarde um instante, estamos criando a sua conta...
        </div>
        <div v-if="sucesso" class="w-64 px-4 py-2 my-2 text-green-800 bg-green-100 border-l-4 border-green-600">
          Conta criada com sucesso!
        </div>
        <div v-if="sucesso" class="w-64 p-4 text-center bg-white text-astronaut">
          Salvando o seu pedido...
        </div>
      </div>

      <!-- Tela de escolha -->
      <main v-if="choice == false" class="container flex flex-wrap justify-center w-full mx-auto md:w-8/12 md:pr-8">
        <h2 class="w-full mb-8 text-2xl text-center font-be text-astronaut">Você já possui cadastro em nosso site?</h2>
        <div class="flex flex-col items-center justify-center w-1/2 px-8 border-r-2 border-gray-400">
          <p class="mb-6 text-center text-gray-700">Faça login com a sua conta já existente:</p>
          <button @click="$router.push('/login')" class="px-8 py-2 text-white uppercase rounded-none bg-astronaut hover:bg-mara">
            Fazer login
          </button>
        </div>
        <div class="flex flex-col items-center justify-center w-1/2 px-8">
          <p class="mb-6 text-center text-gray-700">Clique no botão abaixo para criar a sua conta:</p>
          <button @click="choice = 'singup'" class="px-8 py-2 text-white uppercase rounded-none bg-astronaut hover:bg-mara">
            Criar conta
          </button>
        </div>        
      </main>

      <!-- Tela de cadastro -->
      <main v-if="choice == 'singup'" class="container flex flex-wrap justify-center w-full mx-auto md:w-8/12 md:pr-8">
        <div class="w-full px-4 py-2 mb-4 text-sm leading-tight text-blue-800 bg-blue-100 border-l-4 border-blue-600">
          Crie sua conta utilizando o formulário abaixo.
        </div>

        <!-- Início do formulário -->
        <form @submit.prevent="createUser" class="w-full" autocomplete="on">
          <div class="flex w-full mt-4">
            <label class="block w-full mr-2">
              <span class="text-gray-700">Nome</span>
              <input  v-model="form.nome"
                      class="block w-full mt-1 form-input"
                      required autofocus>
            </label>
            <label class="block w-full ml-2">
              <span class="text-gray-700">Sobrenome</span>
              <input  v-model="form.sobrenome"
                      class="block w-full mt-1 form-input"
                      required>
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block w-full mr-2">
              <span class="text-gray-700">E-mail</span>
              <input  type="email"
                      v-model="form.email"
                      name="username"
                      class="block w-full mt-1 form-input"
                      required>
            </label>
            <label class="block w-full ml-2">
              <span class="text-gray-700">Senha</span>
              <div class="flex items-end">
                <input  v-model="form.senha"
                        name="password"
                        :type="senha ? 'text' : 'password'"
                        class="block w-full mt-1 form-input"
                        required>
                <button @click="senha = !senha" type="button" name="button" class="flex items-center justify-center w-12 h-10 text-white transition-colors duration-150 bg-astronaut hover:bg-mara focus:outline-none">
                  <div v-if="senha">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C6.40848 3 1.71018 6.82432 0.378052 12C1.71018 17.1757 6.40848 21 12 21C17.5915 21 22.2898 17.1757 23.6219 12C22.2898 6.82432 17.5915 3 12 3ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" fill="currentColor" /></svg>
                  </div>
                  <div v-else>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z" fill="currentColor" /></svg>
                  </div>
                </button>
              </div>
            </label>
          </div>
          <div class="flex items-end w-full pt-4 mt-8 border-t-2 border-gray-400">
            <label class="block w-full mr-2">
              <span class="text-gray-700">CEP</span>
              <input v-mask="'#####-###'" v-model="form.cep" class="block w-full mt-1 form-input">
            </label>
            <div class="w-full h-full px-4 py-2 mb-0 ml-2 text-sm leading-tight text-blue-800 bg-blue-100 border-l-4 border-blue-600">
              Informar o CEP primeiro agiliza o preenchimento do restante do formulário.
            </div>
          </div>
          <div class="flex w-full mt-4">
            <label class="block w-full mr-2">
              <span class="text-gray-700">Endereço</span>
              <input v-model="form.endereco" class="block w-full mt-1 form-input">
            </label>
            <label class="block w-full ml-2">
              <span class="text-gray-700">Número</span>
              <input v-model="form.numero" class="block w-full mt-1 form-input">
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block w-full mr-2">
              <span class="text-gray-700">Bairro</span>
              <input v-model="form.bairro" class="block w-full mt-1 form-input">
            </label>
            <label class="block w-full ml-2">
              <span class="text-gray-700">Cidade</span>
              <input v-model="form.cidade" class="block w-full mt-1 form-input">
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block w-full mr-2">
              <span class="text-gray-700">Estado</span>
              <input v-model="form.estado" class="block w-full mt-1 form-input">
            </label>
            <label class="block w-full ml-2">
              <span class="text-gray-700">País</span>
              <input v-model="form.pais" class="block w-full mt-1 form-input">
            </label>
          </div>
          <div class="flex w-full pt-4 mt-8 border-t-2 border-gray-400">
            <label class="block w-full mr-2">
              <span class="text-gray-700">Celular</span>
              <input  v-mask="'(##) #####-####'"
                      v-model="form.celular"
                      placeholder="(00) 00000-0000"
                      class="block w-full mt-1 form-input"
                      required>
            </label>
            <label class="block w-full ml-2">
              <span class="text-gray-700">WhatsApp</span>
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input type="checkbox" v-model="form.whatsapp" class="w-6 h-6 form-checkbox">
                  <span class="ml-3 text-sm">O número informado está no WhatsApp?</span>
                </label>
              </div>
            </label>
          </div>
          <footer class="mt-12">
            <input type="submit" name="" value="Continuar para o financeiro" class="w-full px-8 py-4 text-white uppercase transition-colors duration-150 cursor-pointer bg-astronaut hover:bg-mara">
          </footer>
        </form>
      </main>

      <!-- ìnicio da Lateral -->
      <aside class="w-full mt-8 bg-white md:w-4/12 md:mt-0">
        <header class="p-4 text-gray-600 uppercase">
          Seu pedido:
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
  </div>
</template>

<script>
import HeadingSection from '~/components/HeadingSection.vue'
import Spinner from '~/components/Spinner'

export default {
  name: 'Checkout',
  components: {
    HeadingSection,
    Spinner
  },
  data() {
    return {
      choice: false,

      senha: false,

      loading: false,
      sucesso: false,
      user: {

      },
      form: {
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',

        cep: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: 'Brasil',

        celular: '',
        whatsapp: true,
      }
      // form: {
      //   nome: 'Sergio',
      //   sobrenome: 'Carvalho',
      //   email: 'sergiopcn@gmail.com',
      //   senha: '!23Grilo',

      //   cep: '3840851',
      //   endereco: '',
      //   numero: '',
      //   bairro: '',
      //   cidade: '',
      //   estado: '',
      //   pais: 'Brasil',

      //   celular: '34992003909',
      //   whatsapp: true,
      // }
    }
  },
  computed: {
    cart(){
      return this.$store.state.cart.items;
    },
    itemsMapped(){
      return this.cart.map(e => ({
        product_id: e.product.id,
        name:  e.product.name,
        quantity: e.qtd,
        meta_data: [
          {
            key: 'tamanho',
            value: e.tamanho
          }
        ]
      }));
    },
    frete(){
      return this.$store.state.cart.frete;
    },
    freteMapped(){
      let title;
      switch (this.frete.tipo) {
        case 'moto':
          title = 'Entrega em Uberlândia'
          break;
        case 'retirada':
          title = 'Retirada na Loja'
          break;
        case 'sedex':
          title = 'Correios SEDEX'
          break;
        case 'pac':
          title = 'Correios PAC'
          break;
        default:
          break;
      }

      return {
        method_id: this.frete.tipo,
        method_title:  title,
        total: parseFloat(this.frete.valor).toFixed(2),
        meta_data: [
          {
            key: 'prazo',
            value: this.frete.prazo
          }
        ]
      };
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
  watch: {
    'form.cep'(){
      if (this.form.cep.length == 9) {
        this.getCEP()
      }
    }
  },
  methods: {
    real(valor){
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
    },
    getCEP(){
      let vm = this;
      let cep = this.form.cep.replace('-', '');
      vm.$axios.$get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(function (response) {
        console.log(response);
        vm.form.endereco = response.logradouro;
        vm.form.bairro = response.bairro;
        vm.form.cidade = response.localidade;
        vm.form.estado = response.uf;
        })
    },
    createUser(){
      let vm = this;
      this.loading = true;
      this.$store.dispatch("cart/updateForm", this.form);
      console.log('criando usuário');

      let API_URL = this.$config.apiURL;
      let TOKEN = this.$config.apiToken;

      let config = {
        headers: {
          'Authorization': 'Bearer ' + TOKEN
        }
      }

      let data = {
        email: this.form.email,
        first_name: this.form.nome,
        last_name: this.form.sobrenome,
        username: this.form.email,
        password: this.form.senha,
        billing: {
          first_name: this.form.nome,
          last_name: this.form.sobrenome,
          company: "",
          address_1: this.form.endereco,
          address_2: this.form.numero,
          city: this.form.cidade,
          state: this.form.estado,
          postcode: this.form.cep,
          country: "BRA",
          email: this.form.email,
          phone: this.form.celular
        },
        shipping: {
          first_name: this.form.nome,
          last_name: this.form.sobrenome,
          company: "",
          address_1: this.form.endereco,
          address_2: this.form.numero,
          city: this.form.cidade,
          state: this.form.estado,
          postcode: this.form.cep,
          country: "BRA"
        }
      };

      this.$axios.$post(`https://wplucianamara1.websiteseguro.com/wp-json/wc/v3/customers`, data, config)
      .then(function (response) {
        vm.sucesso = true;
        vm.user = response
        vm.login();
        vm.createOrder();
      })
    },
    login(){
      let vm = this;
      let API_URL = this.$config.apiURL;
      console.log('fazendo login');
      vm.$axios
        .$post(`${API_URL}/wp-json/jwt-auth/v1/token`, {
          username: this.form.email,
          password: this.form.senha
        })
        .then(function(res) {
          vm.$store.dispatch("localStorage/login", res);
          vm.$router.push('/checkout/financeiro')
        })
    },
    createOrder(){
      let vm = this;

      let data = {
      API_URL: this.$config.apiURL,
      TOKEN: this.$config.apiToken,
      payment_method: "pag_seg",
      payment_method_title: "Cartão de Crédito pelo Pagseguro",
      set_paid: false,
      customer_id: this.user.id,
      billing: {
        first_name: this.form.nome,
        last_name: this.form.sobrenome,
        address_1: this.form.endereco,
        address_2: this.form.numero,
        city: this.form.cidade,
        state: this.form.estado,
        postcode: this.form.cep,
        country: "BRA",
        email: this.form.email,
        phone: this.form.celular
      },
      shipping: {
        first_name: this.form.nome,
        last_name: this.form.sobrenome,
        address_1: this.form.endereco,
        address_2: this.form.numero,
        city: this.form.cidade,
        state: this.form.estado,
        postcode: this.form.cep,
        country: "BRA",
      },
      line_items: this.itemsMapped,
      shipping_lines: [
        this.freteMapped
      ]
    };
      this.loading = true;
      this.$store.dispatch("cart/placeOrder", data);
      console.log('criando o pedido');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
