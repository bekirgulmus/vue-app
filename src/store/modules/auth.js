import axios from "axios";
import {router} from "../../router";

const state = {
  token: '',
  FIREBASE_API_KEY: 'AIzaSyBlaldW-aK2gGyfp6sUANUv6a25jRKBA0w'
}

const getters = {
  isAuthanticated(state) {
    return state.token !== '';
  }
}

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state){
    state.token = '';
  }
}

const actions = {
  initAuth({commit, dispatch}){

    const token = localStorage.getItem('token');

    if (token) {
      commit('setToken',token);
      router.push('/').then(() => {});
    } else {
      router.push('/auth').then(() => {});
    }

  },
  login({commit,state},userData) {

    let AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+state.FIREBASE_API_KEY

    if (userData.isUser) {
      AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+state.FIREBASE_API_KEY
    }

    return axios.post(AUTH_URL,{
      email: userData.email,
      password: userData.password,
      returnSecureToken: true,
    })
    .then(response => {
      commit('setToken',response.data.idToken);
      localStorage.setItem('token',response.data.idToken);
    })
  },
  logout({commit}) {
    commit('clearToken');
    localStorage.removeItem('token');
    router.replace('/auth').then(() => {});
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
