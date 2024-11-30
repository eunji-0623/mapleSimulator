import { createApp } from 'vue'
import App from './App.vue'
import { Quasar, QBtn, QRadio } from 'quasar'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

app.use(Quasar, {
  components: { QBtn, QRadio },
  config: {},
})

app.mount('#app')
