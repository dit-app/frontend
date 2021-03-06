export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DIT.',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A DIT. é uma plataforma que conecta empresas com candidatos focados em diversidade.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/accessor','@/plugins/axios', '@/plugins/notifications.client', '@/plugins/formulate'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components/', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@braid/vue-formulate/nuxt',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],

  styleResources: {
    scss: ['@/components/bosons/*.scss'],
  },

  googleFonts: {
    families: {
      Inter: true,
      'DM+Sans': true
    }
  },

  // Fontawesome
  fontawesome: {
    icons: {
      solid: [
        'faBookmark',
        'faBell',
        'faHeart',
        'faEnvelopeOpenText',
        'faUserCheck',
        'faCheckCircle',
        'faBars'
      ],
      brands: [
        'faApple',
        'faDiscord',
        'faAtlassian',
        'faTwitter',
        'faLinkedin',
        'faGithub',
      ],
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'https://dit-api-app.herokuapp.com/',
      pathRewrite: { '^/api': '' },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  formulate: {
    configPath: '@/formulate.config.js'
  }
}
