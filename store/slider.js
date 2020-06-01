const BASE_URL  = 'https://lucianamara.com.br';
const API_URL   = 'https://wplucianamara1.websiteseguro.com'
const TOKEN     = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3BsdWNpYW5hbWFyYTEud2Vic2l0ZXNlZ3Vyby5jb20iLCJpYXQiOjE1OTEwMDAxMTAsIm5iZiI6MTU5MTAwMDExMCwiZXhwIjoxNTkxNjA0OTEwLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.mRlOWnAeN0c7DWzwDOBchoGGEuCNNNaE3O6qpUixrnQ'


export const state = () => ({
  items: {},
  loading: true,
  trending: {
    loading: true,
    items: {}
  },
  current: {
    loading: true,
    item: {
      id: 92,
      name: "Blusa Mayla",
      slug: "blusa-mayla",
      description: "<p>Blusa feminina modelo Mayla branca com detalhes preto</p>\n",
      price: "99.90",
      purchasable: true,
      stock_status: "instock",
      backorders: "no",
      backorders_allowed: false,
      weight: "1",
      dimensions: {length:"27", width: "39", height: "7"},
      related_ids: [16,82,18,89,12],
      categories: [
          {"id":25, name: "blusas", slug: "blusas"},
          {"id":16, name: "feminino", slug: "feminino"}
        ],
      tags: [
          {"id":26, name: "Blusa", slug: "blusa"},
          {"id":28, name: "blusa feminina", slug: "blusa-feminina"},
          {"id":27, name: "blusa social", slug: "blusa-social"}
        ],
      images: [
        {"id":35,"date_created":"2020-05-25T05:40:27","date_created_gmt":"2020-05-25T11:40:27","date_modified":"2020-05-25T05:40:27","date_modified_gmt":"2020-05-25T11:40:27","src":"https://res.cloudinary.com/luciana-mara/image/upload/v1590406831/woocommerce/IMG_8011.jpg","name":"IMG_8011","alt":""},
        {"id":36,"date_created":"2020-05-25T05:40:53","date_created_gmt":"2020-05-25T11:40:53","date_modified":"2020-05-25T05:40:53","date_modified_gmt":"2020-05-25T11:40:53","src":"https://res.cloudinary.com/luciana-mara/image/upload/v1590406856/woocommerce/IMG_8035.jpg","name":"IMG_8035","alt":""}
      ],
      attributes: [
        {
          "id":0,
          "name": "Tamanhos",
          "position": 0,
          "visible": true,
          "variation": false,
          "options": ["PP","P","M","G","GG"]
        }
      ]
      }
    }
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
    state.current.loading = false
    state.current.item = product
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
      .$get(`${API_URL}/wp-json/wc/v3/products?per_page=100&status=publish`, config)
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
  retrieveSingle(context, payload, $axios) {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + TOKEN
      }
    }

    var vm = this
    vm.$axios
      .$get(`${API_URL}/wp-json/wc/v3/products?status=publish&slug=${payload}`, config)
      .then(function(res) {
        console.log(res);
          context.commit("toggleCurrent", res[0]);
      })
      .catch(function(error) {
          console.log(error);
      });
  }
};
