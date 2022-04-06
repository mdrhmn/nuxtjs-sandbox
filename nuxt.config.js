export default {

  target: 'static',
  // ssr: 'false',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxjs-todo-app',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // One thing you will probably need to change first is adding an option so that the nuxt generate command will also create a fallback file. 
  // This file will prompt the hosting service to let Nuxt handle the routing rather than the hosting service, throwing a 404 error.
  generate: { fallback: true },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
