import Vue from "vue";
import VuexEsm from "vuex";

import auth from "./modules/auth";
import product from "./modules/product";

Vue.use(VuexEsm);


export const store = new VuexEsm.Store({
  modules: {
    auth,
    product
  }
})
