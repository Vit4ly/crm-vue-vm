import Vue from 'vue'
import Vuelidate from 'vuelidate/src'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from '@/utils/message.plagin'
import Loader from "@/components/app/Loader";
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyD-CGKbduS1FIV5BCeGtpcKBMDYcnNJwEQ",
  authDomain: "crm-vue-vm.firebaseapp.com",
  databaseURL: "https://crm-vue-vm.firebaseio.com",
  projectId: "crm-vue-vm",
  storageBucket: "crm-vue-vm.appspot.com",
  messagingSenderId: "31478420534",
  appId: "1:31478420534:web:73dfa0ca0a0bc334c03497",
  measurementId: "G-04NV2ZF2XR"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


