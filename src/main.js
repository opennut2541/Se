import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
// import store from './store.js'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import { store } from './store/index'
import * as firebase from 'firebase/app'
import AlertCmp from './components/shared/alerts.vue'

import VueChatScroll from 'vue-chat-scroll';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.use(VueChatScroll);

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App),
  // created () {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyDfNUdaDO_4W97n605dqPaCBgvgAoEJLDo',
  //     authDomain: 'vuese-5b13a.firebaseapp.com',
  //     databaseURL: 'https://vuese-5b13a.firebaseio.com',
  //     projectId: 'vuese-5b13a',
  //     storageBucket: 'vuese-5b13a.appspot.com',
  //     messagingSenderId: "1088126208662"
  //   })
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.$store.dispatch('autoSignin', user)
  //     }
  //   })
  //   this.$store.dispatch('loadWork')
  // }
}).$mount('#app')
