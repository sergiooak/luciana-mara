const API_URL   = this.$config.apiURL;
const TOKEN     = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BsdWNpYW5hbWFyYTEud2Vic2l0ZXNlZ3Vyby5jb20iLCJpYXQiOjE1OTE2MDczNTcsIm5iZiI6MTU5MTYwNzM1NywiZXhwIjoxNTk0MTk5MzU3LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.7wfIOrTFP6OB6XO9bpH2PptnvclTJvaH_yF07O4WCjk'

export const state = () => ({
  user: {
    logado: false,
    user_email: '',
    user_nicename: '',
    user_display_name: '',
    id: ''
  },
  loading: false
})

export const mutations = {
  setUser (state, user) {
    state.user.logado = true
    state.user.user_email = user.user_email,
    state.user.user_nicename = user.user_nicename,
    state.user.user_display_name = user.user_display_name
  },
  logout (state) {
    state.user.logado = false
    state.user.user_email = '',
    state.user.user_nicename = '',
    state.user.user_display_name = ''
  },
}

export const actions = {
  login(context, payload) {
    context.commit("setUser", payload);
    var vm = this

    let config = {
      headers: {
        'Authorization': 'Bearer ' + payload.token
      }
    }

    vm.$axios
      .$get(`${API_URL}/wp-json/wp/v2/users`, {
        username: payload.username,
        password: payload.password
      }, config)
      .then(function(res) {
        let user = payload;
        user.id = res.id
        context.commit("setUser", user);
      })
      .catch(function(error) {
          console.log(error);
      });
  },
  logout(context) {
    context.commit("logout");
    $nuxt._router.push('/')
  },

};
