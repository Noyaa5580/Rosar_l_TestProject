export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ROSAR-L',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/components',
    '@nuxt/axios'

  ],
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxt/cors'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: 'https://www.rosar-l.ru/api/v2/categories/', pathRewrite: {'^/api/': ''} }
  },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },
    ssr: true,
  }

