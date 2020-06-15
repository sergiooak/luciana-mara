import axios from 'axios';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Luciana Mara Estúdio de Costura',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Estúdio de Costura' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },
  pwa: {
    manifest: {
      name: 'Luciana Mara Estúdio de Costura',
      short_name: "Luciana Mara",
      lang: 'pt-BR'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'animate.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['nuxt-vuex-localstorage', {
      localStorage: ['localStorage', 'cart', 'categories', 'instagram', 'products', 'slider']
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes(){
      axios.get("https://wplucianamara1.websiteseguro.com/wp-json/wp/v2/posts").then((res) => {
        return res.data.map((post) => {
          return{
            route: "/blog/" + post.slug,
            payload: post
          }
        })
      })
      // let blog = axios.get("https://wplucianamara1.websiteseguro.com/wp-json/wp/v2/posts").then((res) => {
      //   return{
      //     route: "/blog",
      //     payload: res
      //   }
      // })
      // return Promise.all([posts]).then(values => {
      //   return values.join().split(',');
      // })
    }
  }
}
