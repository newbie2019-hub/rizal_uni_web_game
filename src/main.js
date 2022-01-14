import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './assets/css/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.config.productionTip = false

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBbKODpUvb5kEojJMWmjoyG9ihdKMqxpVQ",
  authDomain: "quiz-f308b.firebaseapp.com",
  projectId: "quiz-f308b",
  storageBucket: "quiz-f308b.appspot.com",
  messagingSenderId: "906128623112",
  appId: "1:906128623112:web:b9426935851921e6c3b3bd"
};

initializeApp(firebaseConfig)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
