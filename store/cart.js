export const state = () => ({
  items: [],
  frete: {
    cep: '',
    prazo: 0,
    valor: 0,
    tipo: ''
  }
})

export const mutations = {
  add (state, products) {
    state.items.push(products)
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
};
