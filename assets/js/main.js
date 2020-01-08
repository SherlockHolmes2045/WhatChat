// NOTE: The contents of this file will only be executed if
// you uncomment its entry in "web/static/js/app.js".

// To use Phoenix channels, the first step is to import Socket
// and connect at the socket path in "lib/my_app/endpoint.ex":
import Vue from 'vue/dist/vue.js'
// axios
import Axios from 'axios' 
import VueAxios from 'vue-axios'
import App from '../components/App.vue'

// ElementUI for design
import ElementUI, { Button } from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

// import Asida from "./../components/asida.vue"
import router from './router.js'
import store from './store.js'

Vue.use(ElementUI, { locale })
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.use(Button)

//
// let socket = new Socket("/socket", { params: { token: window.userToken } })
// socket.connect()

Vue.config.productionTip = false

Axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With,content-type,authorization'
Axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
Axios.defaults.headers.common['withCredentials'] = 'X-Requested-With,content-type,authorization'
Axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

Vue.use(VueAxios, Axios)
// Create the main component
// Vue.component('my-app', MyApp)
// And create the top-level view model:
let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
export default vm
