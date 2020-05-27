const BASE_URL  = 'https://lucianamara.com.br';
const API_URL   = 'https://wplucianamara1.websiteseguro.com'
const TOKEN     = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BsdWNpYW5hbWFyYTEud2Vic2l0ZXNlZ3Vyby5jb20iLCJpYXQiOjE1OTAxNjEyMDMsIm5iZiI6MTU5MDE2MTIwMywiZXhwIjoxNTkwNzY2MDAzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.lx4UM48EoSQAaSstT9yKJx5mQD-xrrjF7_mZ58EAix4'


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
    let config = {
      headers: {
        'Authorization': 'Bearer ' + TOKEN
      }
    }

    // console.log(API_URL);
    // console.log(TOKEN);

    var vm = this
    vm.$axios
      .$get(`${API_URL}/wp-json/wc/v3/products?status=publish`, config)
      .then(function(res) {
          context.commit("toggle", res);
      })
      .catch(function(error) {
          console.log(error);
      });

    vm.$axios
      .$get(`${API_URL}/wp-json/wc/v3/products?per_page=4&status=publish`, config)
      .then(function(res) {
          context.commit("toggleTrending", res);
      })
      .catch(function(error) {
          console.log(error);
      });
  },
};
