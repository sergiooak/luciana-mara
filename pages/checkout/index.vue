<template lang="html">
  <div class="">
    <HeadingSection class="mt-8 mb-8" title="Checkout" />
    <div class="container mx-auto flex flex-col md:flex-row items-start px-4 mb-12 relative">
      <div v-if="loading" class="flex flex-col absolute inset-0 flex justify-center items-center bg-gray-200" style="--bg-opacity: .75">
        <Spinner class="-mt-4" />
        <div v-if="!sucesso" class="bg-white w-64 text-center text-astronaut mt-8 px-4 py-2">
          Por favor aguarde um instante, estamos criando a sua conta...
        </div>
        <div v-if="sucesso" class="w-64 my-2 bg-green-100 border-l-4 border-green-600 text-green-800 px-4 py-2">
          Conta criada com sucesso!
        </div>
        <div v-if="sucesso" class="bg-white w-64 text-center text-astronaut p-4">
          Salvando o seu pedido...
        </div>
      </div>
      <main class="w-full md:w-8/12 container mx-auto flex justify-center flex-wrap md:pr-8">
        <div class="w-full mb-4 bg-green-100 border-l-4 border-green-600 text-green-800 px-4 py-2 text-sm leading-tight mb-4">
          Crie sua conta utilizando o formulário abaixo.
        </div>
        <form class="w-full">
          <div class="flex w-full mt-4">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Nome</span>
              <input v-model="form.nome" class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block ml-2 w-full">
              <span class="text-gray-700">Sobrenome</span>
              <input v-model="form.sobrenome" class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block w-full mr-2">
              <span class="text-gray-700">E-mail</span>
              <input v-model="form.email" name="username" class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block w-full ml-2">
              <span class="text-gray-700">Senha</span>
              <input v-model="form.senha" name="password" type="password" class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex items-end w-full mt-8 pt-4 border-t-2 border-gray-400">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">CEP</span>
              <input v-model="form.cep" class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <div class="ml-2 w-full h-full mb-4 bg-blue-100 border-l-4 border-blue-600 text-blue-800 px-4 py-2 text-sm leading-tight mb-4">
              Informar o CEP primeiro agiliza o preenchimento do restante do formulário.
            </div>
          </div>
          <div class="flex w-full mt-4">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Endereço</span>
              <input v-model="form.endereco" class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block ml-2 w-full">
              <span class="text-gray-700">Número</span>
              <input v-model="form.numero" class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Bairro</span>
              <input v-model="form.bairro" class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block ml-2 w-full">
              <span class="text-gray-700">Cidade</span>
              <input v-model="form.cidade" class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex w-full mt-4">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Estado</span>
              <input v-model="form.estado" class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block ml-2 w-full">
              <span class="text-gray-700">País</span>
              <input v-model="form.pais" class="form-input mt-1 block w-full px-4 py-2">
            </label>
          </div>
          <div class="flex w-full mt-8 pt-4 border-t-2 border-gray-400">
            <label class="block mr-2 w-full">
              <span class="text-gray-700">Celular</span>
              <input v-model="form.celular" class="form-input mt-1 block w-full px-4 py-2">
            </label>
            <label class="block ml-2 w-full">
              <span class="text-gray-700">WhatsApp</span>
              <div class="mt-2">
                <input v-model="form.whatsapp" type="checkbox" class="form-input mt-1">
                <span class="text-gray-600 text-sm">
                  O número informado está no WhatsApp?
                </span>
              </div>
            </label>
          </div>
        </form>
      </main>
      <aside class="w-full md:w-4/12 mt-8 md:mt-0 bg-white">
        <header class="p-4 uppercase text-gray-600">
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
      <button @click="createUser()" class="px-4 py-2 uppercase text-white bg-astronaut">
        Continuar para o financeiro
      </button>
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
    }
  },
  computed: {
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
  watch: {
    'form.cep'(){
      if (this.form.cep.length == 8) {
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
      vm.$axios.$get(`https://viacep.com.br/ws/${vm.form.cep}/json/`)
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

      let API_URL = process.env.API_URL;
      let TOKEN = process.env.TOKEN;

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
      let API_URL = process.env.API_URL;
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
      line_items: [
        {
          product_id: 93,
          quantity: 2
        },
        {
          product_id: 22,
          variation_id: 23,
          quantity: 1
        }
      ],
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: '0'
        }
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
