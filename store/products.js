export const state = () => ({
  items: {},
  loading: true,
  trending: {
    loading: true,
    items: {}
  },
  current: {}
})

export const mutations = {
  toggle (state, products) {
    state.items = products
    state.loading = false
  },
  toggleTrending (state, products) {
    state.trending.items = products
    state.trending.loading = false
  },
  toggleCurrent (state, product) {
    state.current = product
  }
}

export const actions = {
  retrieve(context, $axios) {
    let API_URL = process.env.API_URL;

    let config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.TOKEN
      }
    }

    console.log(API_URL);
    console.log(process.env.TOKEN);

    var vm = this
    vm.$axios
      .$get(`${API_URL}/wp-json/wc/v3/products`, config)
      .then(function(res) {
          context.commit("toggle", res);
      })
      .catch(function(error) {
          console.log(error);
      });

    vm.$axios
      .$get(`${API_URL}/wp-json/wc/v3/products?per_page=4`, config)
      .then(function(res) {
          context.commit("toggleTrending", res);
      })
      .catch(function(error) {
          console.log(error);
      });
  },
};
