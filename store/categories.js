const BASE_URL  = 'https://lucianamara.com.br';
const API_URL   = 'https://wplucianamara1.websiteseguro.com'
const TOKEN     = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BsdWNpYW5hbWFyYTEud2Vic2l0ZXNlZ3Vyby5jb20iLCJpYXQiOjE1OTEwMDAxMTAsIm5iZiI6MTU5MTAwMDExMCwiZXhwIjoxNTkxNjA0OTEwLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.mRlOWnAeN0c7DWzwDOBchoGGEuCNNNaE3O6qpUixrnQ'


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
    let config = {
      headers: {
        'Authorization': 'Bearer ' + TOKEN
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
