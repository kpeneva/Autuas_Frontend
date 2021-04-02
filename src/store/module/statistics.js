
import { statisticsAxiosService } from "../../api_services";

export const state = {
    allGoals: [],
    completedGoals: [],
    incompletedGoals: [],
    positiveFeelings: [],
    negativeFeelings: [],
};
export const getters = {
    allGoalsCount: (state) => state.allGoals,
    completedGoalsCount: (state) => state.completedGoals,
    incompletedGoalsCount: (state) => state.incompletedGoals,
    positiveFeelingsCount: (state) => state.positiveFeelings,
    negativeFeelingsCount: (state) => state.negativeFeelings
};
export const actions = {
    getAllGoalsCount({commit}, userId) {
        return statisticsAxiosService
            .getAllGoalsCount(userId)
            .then((res) => commit("GET_ALL_GOALS_COUNT", res.data));
    },
    getCompletedGoalsCount({commit}, userId) {
        return statisticsAxiosService
            .getCompletedGoalsCount(userId)
            .then((res) => commit("GET_COMPLETED_GOALS_COUNT", res.data));
    },
    getIncompletedGoalsCount({commit}, userId) {
        return statisticsAxiosService
            .getIncompletedGoalsCount(userId)
            .then((res) => commit("GET_INCOMPLETED_GOALS_COUNT", res.data));
    },
    getPositiveFeelingsCount({commit}, userId) {
        return statisticsAxiosService
            .getPositiveFeelingsCount(userId)
            .then((res) => commit("GET_POSITIVE_FEELINGS_COUNT", res.data));
    },
    getNegativeFeelingsCount({commit}, userId) {
        return statisticsAxiosService
            .getNegativeFeelingsCount(userId)
            .then((res) => commit("GET_NEGATIVE_FEELINGS_COUNT", res.data));
    },
};
export const  mutations = {
    GET_ALL_GOALS_COUNT(state, allGoals){
        state.allGoals = allGoals;
    },
    GET_COMPLETED_GOALS_COUNT(state, completedGoals){
        state.completedGoals = completedGoals;
    },
    GET_INCOMPLETED_GOALS_COUNT(state, incompletedGoals){
        state.incompletedGoals = incompletedGoals;
    },
    GET_NEGATIVE_FEELINGS_COUNT(state, negativeFeelings){
        state.negativeFeelings = negativeFeelings;
    },
    GET_POSITIVE_FEELINGS_COUNT(state, positiveFeelings){
        state.positiveFeelings = positiveFeelings;
    },
};
export const statistics = {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
};
export default{
    state,
    getters,
    mutations,
    actions
}