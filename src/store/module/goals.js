import { goalsAxiosService } from "../../api_services";

export const state = {
  goals: [],
};

export const getters = {
  allGoals: (state) => state.goals,
};

export const actions = {
  getAllGoals({ commit }) {
    return goalsAxiosService
      .getAllGoals()
      .then((res) => commit("GET_GOALS", res.data));
  },
  getGoalsByUserId({ commit }, userId) {
    return goalsAxiosService
      .getGoalsByUserId(userId)
      .then((res) => commit("GET_GOALS_BY_USERID", res.data));
  },
  addGoal({ commit }, goal) {
    return goalsAxiosService
      .addGoal(goal)
      .then((res) => commit("ADD_GOAL", res.data));
  },
  updateGoal({ commit }, updateGoal) {
    return goalsAxiosService
      .updateGoal(updateGoal)
      .then((res) => commit("UPDATE_GOAL", res.data))
  },
  removeGoal({ commit }, { id, userId }) {
    console.log('id',id,'userId',userId)
    return goalsAxiosService
      .removeGoal(id, userId)
      .then((res) => commit("REMOVE_GOAL", res.data));
  },
};

export const mutations = {
  GET_GOALS(state, goals) {
    state.goals = goals;
  },
  GET_GOALS_BY_USERID(state, goals) {
    state.goals = goals;
  },
  ADD_GOAL(state, goal) {
    state.goals.unshift(goal);
  },
  UPDATE_GOAL(state, updateGoal) {
      console.log(updateGoal)
    const index = state.goals.findIndex((goal) => goal.id === updateGoal.id);
    if (index !== -1) {
      state.goals.splice(index, 1, updateGoal);
    }
  },
  REMOVE_GOAL(state, {id, userId }) {
    if(id !== -1){
      state.goals.splice(id, 1);
    }
    // state.goals = state.goals.filter((goal) => goal.id !== id && goal.userId !== userId);
  },
};
export const goals = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
export default {
  state,
  getters,
  actions,
  mutations,
};
