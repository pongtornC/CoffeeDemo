export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'CoffeeShop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {
        src: '../.././js/vendor/modernizr-2.6.2.min.js'
      },
      {
        src: '../.././js/vendor/jquery-1.10.2.min.js'
      },
      {
        src: '../.././js/jquery.nav.js'
      },
      {
        src: '../.././js/jquery.sticky.js'
      },
      {
        src: '../.././js/bootstrap.min.js'
      },
      {
        src: '../.././js/plugins.js'
      },
      {
        src: '../.././js/wow.min.js'
      },
      {
        src: '../.././js/main.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //https://stackoverflow.com/questions/60051016/nuxt-config-js-not-loading-css-files
	  //https://forum.vuejs.org/t/nuxt-import-css-file-and-js-file/42498
      {
        rel: 'stylesheet',
        href: '../.././css/owl.carousel.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/animate.min.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/main.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/responsive.css'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: 
    [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    //'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-vuex-localstorage'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
