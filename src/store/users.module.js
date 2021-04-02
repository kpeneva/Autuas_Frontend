//import { userService } from '../_services';
import { userAxiosService } from "../api_services/";

export const state = {
  all: {},
  user: [],
};
export const getters = {
  getUser: (state) => state.user,
};

export const actions = {
  getAll({ commit }) {
    commit('GET_ALL_REQUEST');

    return userAxiosService
      .getAll()
      .then((res) => commit('GET_ALL_SUCCESS', res.data))
      .catch((error) => commit('GET_ALL_FAILURE', error));
  },
  getUserById({ commit }, id){
    console.log(id);
    return userAxiosService 
      .getUserById(id)
      .then((res) => commit("GET_USER_BY_ID", res.data));
  },
  updateUser({ commit }, updatedUser){  
    return userAxiosService
      .update(updatedUser)
      .then((res) => {
        let user = res.data;
        commit("UPDATE_USER", res.data)
        const localSUser = JSON.parse(localStorage.getItem("user"));
        localSUser.name = user.name;
        localSUser.username = user.username;
        localSUser.email = user.email;
        localStorage.setItem("user", JSON.stringify(localSUser));
      });  
       
  },
};

 export const mutations = {
  GET_ALL_REQUEST(state) {
    state.all = { loading: true };
  },
  GET_ALL_SUCCESS(state, users) {
    state.all = { items: users };
  },
  GET_ALL_FAILURE(state, error) {
    state.all = { error };
  },
  UPDATE_USER(state, updatedUser){
    state.user = updatedUser;
  },
  GET_USER_BY_ID(state, user){
    state.user = user;
  }
};

export const users = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
export default {
  state,
  actions,
  mutations,
  getters
};
