const API_URL = process.env.API_URL;
const TOKEN = process.env.TOKEN;

export const state = () => ({
  items: [],
  frete: {
    cep: '',
    prazo: 0,
    valor: 0,
    tipo: ''
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
    pais: '',

    celular: '',
    whatsapp: true,
  },
  order: {}
})

export const mutations = {
  add (state, products) {
    if (state.items === undefined){
      localStorage.setItem('cart', '');
      window.location.reload();
    }else{
      state.items.push(products)
    }
  },
  remove (state, uniqueId) {
    let i = state.items.findIndex(x => x.uniqueId == uniqueId);
    state.items.splice(i, 1);
  },
  removeAll (state, uniqueId) {
    state.items = []
  },
  updateFrete (state, payload) {
    state.frete = payload
  },
  updateForm (state, payload) {
    state.form = payload
  },
  updateOrder (state, payload) {
    state.form = payload
  },
}

export const actions = {
  add(context, payload, $axios) {
    let uniqueId = Math.random().toString(16).slice(2);
    let obj = {
      uniqueId: uniqueId,
      product: payload.product,
      qtd: payload.qtd,
      tamanho: payload.tamanho
    }
    context.commit("add", obj);
    $nuxt._router.push('/carrinho')
  },
  remove(context, uniqueId) {
    context.commit("remove", uniqueId);
  },
  reset(context){
    context.commit("removeAll");
  },
  updateFrete(context, payload) {
    context.commit("updateFrete", payload);
  },
  updateForm(context, payload) {
    context.commit("updateForm", payload);
  },
  placeOrder(context, payload) {
    var vm = this
    let config = {
      headers: {
        'Authorization': 'Bearer ' + TOKEN
      }
    }

    vm.$axios
      .$post(`${API_URL}/wp-json/wc/v3/orders`, payload, config)
      .then(function(res) {
          console.log(res);
      })
      .catch(function(error) {
          console.error(error);
      });

    // context.commit("updateForm", payload);
  },
};
