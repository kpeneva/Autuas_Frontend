/* in charge of the account section of the centralized state store.
It contains actions for registering a new user, logging in/out, contains
mutations for each of the lower state changes invloved for each account action.

The inital logged in state of the user is set by checking if the user is saved in 
local storage, which keeps the user logged in if the browser is refreshed and between
browser sessions
*/

import { userAxiosService } from "../api_services"
import {checkInServices} from "../api_services/checkIn.service.axios"

const user = JSON.parse(localStorage.getItem("user"));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

export const actions = {
  login({ dispatch, commit }, { username, password }) {
    commit("LOGIN_REQUEST", { username });

    return userAxiosService
      .login(username, password)
      .then((res) => {
        commit("LOGIN_SUCCESS", res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        commit("LOGIN_FAILURE", error);
        dispatch("alert/error", error, { root: true });
      });
  },
  logout({ commit }) {
    return userAxiosService.logout().then(commit("logout"));
  },
  register({ dispatch, commit }, user) {
    commit("REGISTER_REQUEST", user);

    // Return promises and then handle resolved value in component (ex. display alert) - better to display alerts using the css framework/library
    return userAxiosService
      .register(user)
      .then((res) => {
        commit("REGISTER_SUCCESS", res.data);
        dispatch("alert/success", "Registration successful", { root: true });
      })
      .catch((error) => {
        commit("REGISTER_FAILURE", error);
        dispatch("alert/error", error, { root: true });
      });
  },
  saveDailyCheckIn({dispatch, commit}, dailyCheckIn){
    commit("DAILYCHECKIN_REQUEST",dailyCheckIn);

    return checkInServices.saveDailyCheckIn(dailyCheckIn)
    .then((res) => {
      commit("DAILYCHECKIN_SUCCESS", res.data);
      dispatch("alert/success", "Submission successful", {root:true});
    })
    .catch((error) => {
      commit("DAILYCHECKIN_FAILURE",error);
      dispatch("alert/error", error, {root:true});
    });
  }
};

export const mutations = {
  LOGIN_REQUEST(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  LOGIN_SUCCESS(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  LOGIN_FAILURE(state) {
    state.status = {};
    state.user = null;
  },
  LOGOUT(state) {
    state.status = {};
    state.user = null;
  },
  REGISTER_REQUEST(state, user) {
    state.status = { registering: true };
  },
  REGISTER_SUCCESS(state, user) {
    state.status = {};
  },
  REGISTER_FAILURE(state, error) {
    state.status = {};
  },
  DAILYCHECKIN_REQUEST(state, dailyCheckIn){
    state.status = {loggedIn: true};
    
  }
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
};
