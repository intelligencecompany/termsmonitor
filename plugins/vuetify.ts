// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            background: '#ffffff',
            surface: '#ffffff',
            primary: '#007bff',
            primarylight: "#cfdef3",
            secondary: '#0056b3',
            error: '#ff5252',
            info: '#2196f3',
            success: '#4caf50',
            warning: '#fb8c00',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
