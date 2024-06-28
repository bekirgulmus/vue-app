import axios from "axios";
import {router} from "../../router";

const state = {
  products: []
}

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    // TODO: Buna bi bak
    return key => state.products.filter(element => {
      return element.key === key;
    })
  }
}

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
}

const actions = {
  initApp({commit,state}){
    //state.products = [];
    axios.get('/products.json')
      .then(response => {
          const data = response.data;
          for(const key in data) {
            data[key].key = key;
            commit('updateProductList',data[key]);
          }
      });
  },
  saveProduct({commit},product) {
    axios.post('/products.json', product)
      .then(response => {
         console.log(product);
         const key = response.data.name;
         commit('updateProductList', {...product, key: key});
      })
  },
  sellProduct({commit},payload) {
    const product = state.products.filter(element => {
      return element.key === payload.key;
    });

    if (product) {
      const totalCount = product[0].count - payload.count;

      axios.patch('/products/'+payload.key+'.json',{count: totalCount})
        .then(response => {
          //console.log(response);
          product[0].count = totalCount;
          router.push('/').then(() => {});
        });
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
