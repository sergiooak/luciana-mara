export const state = () => ({
  items: {},
  loading: true
})

export const mutations = {
  toggle (state, categories) {
    state.items = categories
    state.loading = false
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

    var vm = this
    vm.$axios
      .$get(`${API_URL}/wp-json/wc/v3/products/categories?hide_empty=true`, config)
      .then(function(res) {
          context.commit("toggle", res);
      })
      .catch(function(error) {
          console.log(error);
      });
  }
};
