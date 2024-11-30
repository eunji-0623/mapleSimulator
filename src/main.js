import { createApp } from 'vue'
import App from '../app.vue'
import { Quasar, QBtn, QRadio, QCard, QInput, QCardSection } from 'quasar'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import '/src/assets/style.scss'
import router from '../index.js'

const app = createApp(App)

app.use(Quasar, {
  components: { QBtn, QRadio, QCard, QInput, QCardSection },
  config: {},
})
app.use(router)
app.mount('#app')
