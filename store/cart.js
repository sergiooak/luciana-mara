export const state = () => ({
  items: [],
})

export const mutations = {
  add (state, products) {
    state.items.push(products)
  },
  remove (state, uniqueId) {
    state.trending.items = products
  },
  removeAll (state, uniqueId) {
    state.items = []
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

  },
  reset(context){
    context.commit("removeAll");
  }
};
