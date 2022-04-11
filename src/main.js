import Vue from 'vue'
import App from './App.vue'

import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider: createProvider(),
}).$mount('#app')
