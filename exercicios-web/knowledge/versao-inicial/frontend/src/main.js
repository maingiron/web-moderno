import "font-awesome/css/font-awesome.css"
import Vue from "vue"

import App from "./App"

import "@/config/bootstrap"
import "@/config/msgs"
import store from "@/config/store"
import router from "@/config/router"

Vue.config.productionTip = false

// Temp
require("axios").defaults.headers.common["Authorization"] = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIE0iLCJlbWFpbCI6Imxlb25hcmRvQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjA4MTYyNTIsImV4cCI6MTU2MTA3NTQ1Mn0.ordZjBvrFjwDwVICiGzIFljUi9RBW0iRnJyhJ4LdHDc"

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")