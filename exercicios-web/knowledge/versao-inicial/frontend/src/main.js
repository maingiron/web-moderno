import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import '@/config/bootstrap'
import store from '@/config/store'
import router from "@/config/router"

Vue.config.productionTip = false

// Temp
require("axios").defaults.headers.common["Authorization"] = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNTYwNTU1NTM1LCJleHAiOjE1NjA4MTQ3MzV9.3pppHNubr8u8X67mHrX97Cq5BnPU4UF8LmDv8Oid2hc"

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')