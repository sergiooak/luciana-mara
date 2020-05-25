export const state = () => ({
  items: {},
  loading: true
})

export const mutations = {
  toggle (state, grams) {
    state.items = grams
    state.loading = false
  }
}

export const actions = {
  retrieve(context, $axios) {
    var vm = this
    vm.$axios
      .$get(`https://www.instagram.com/lucianamarquesuniformes/?__a=1`)
      .then(function(res) {
          context.commit("toggle", res.graphql.user.edge_owner_to_timeline_media.edges);
      })
      .catch(function(error) {
          console.log(error);
      });
  }
};
