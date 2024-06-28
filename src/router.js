import Vue from "vue";
import VueRouter from "vue-router";

import Auth from "./components/Auth.vue";
import ProductList from "./components/products/ProductList.vue";
import ProductPurchase from "./components/products/ProductPurchase.vue";
import ProductSell from "./components/products/ProductSell.vue";

Vue.use(VueRouter);

import {store} from "./store/store";

const routes = [
  {
    path : '/', component: ProductList,
    beforeEnter(to,from,next) {
      if (store.getters.isAuthanticated) {
        next();
      } else {
        next('/auth');
        //console.log(store.getters);
      }
    }
  },
  {
    path : '/urun-islemleri', component: ProductPurchase,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthanticated) {
        next();
      } else {
        next('/auth');
      }
    }
  },
  {
    path : '/urun-cikisi', component: ProductSell,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthanticated) {
        next();
      } else {
        next('/auth');
      }
    }
  },
  {
    path : '/auth', component: Auth
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
