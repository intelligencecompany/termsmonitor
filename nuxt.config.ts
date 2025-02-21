// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    'nuxt-nodemailer',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  plugins: [
    '~/plugins/vue-recaptcha-v3'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000/api',
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY
    }
  },

  nitro: {
    devProxy: {
      '/api': {
        target: process.env.API_BASE || 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  nodemailer: {
    from: '"Terms Monitor" <process.env.CONTACT_EMAIL>',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NUXT_NODEMAILER_FROM,
      pass: process.env.NUXT_NODEMAILER_AUTH_PASS,
    },
  },

  layouts: {
    portal: '~/layouts/portal.vue'
  },

  compatibilityDate: '2025-02-20'
})