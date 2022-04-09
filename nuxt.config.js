export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nuxt Starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    './assets/main.scss',
  ],

  /*
   ** CSS auto brower prefixes
   */
  postcss: {
    'postcss-cssnext': {
      browsers: ['last 2 versions', 'ie >= 9'],
    },
  },

  /*
   ** Router Configuration
   */
  router: {
    linkActiveClass: 'active',
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/google-analytics', '@nuxtjs/sitemap'],

  googleAnalytics: {
    id: 'UA-00000000-1',
  },

  /*
   ** Sitemap Configuration
   */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://NUXTSTARTER.com',
    cacheTime: 1000 * 60 * 15,
    exclude: ['/404'],
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
}
