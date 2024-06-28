import Vue from 'vue'
import App from './App.vue'
import {router} from "./router";
import {store} from "./store/store";
import axios from "axios";

axios.defaults.baseURL = 'https://vue-app-default-rtdb.firebaseio.com';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
