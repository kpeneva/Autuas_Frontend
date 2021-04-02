import {diaryAxiosService} from "../../api_services";

export const state = {
    diaryLogs: []
};

export const getters = {
    allDiaryLogs: (state) => state.diaryLogs
};

export const actions = {
    addDiaryLog({commit}, diaryLog){
        return diaryAxiosService
            .addDiaryLog(diaryLog)
            .then((res) => commit('ADD_DIARYLOG', res.data))
    },
    getAllDiaryLogs({commit}){
        return diaryAxiosService
            .getAllDiaryLogs()
            .then((res) => commit('GET_DIARYLOGS',res.data))
    },
    getDiaryLogsByUserId({commit},userId){
        return diaryAxiosService
            .getDiaryLogsByUserId(userId)
            .then((res) => commit('GET_DIARYLOGS_BY_USERID',res.data))
    },
    getDiaryLogsById({commit}, id){
        return diaryAxiosService
            .getDiaryLogsById(id)
            .then((res) => commit('GET_DIARYLOGS_BY_ID', res.data))
    },
    updateDiaryLog({commit}, updateLog){
        return diaryAxiosService
            .updateDiaryLog(updateLog)
            .then((res) => commit('UPDATE_DIARYLOG', res.data))
    },
    removeDiaryLog({commit}, id){
        return diaryAxiosService
            .removeDiaryLog(id)
            .then((res) => commit('REMOVE_DIARYLOG',res.data))
    }
};

export const mutations = {
    ADD_DIARYLOG(state, diaryLog){
        state.diaryLogs.unshift(diaryLog);
    },
    GET_DIARYLOGS(state, diaryLogs){
        state.diaryLogs = diaryLogs;
    },
    GET_DIARYLOGS_BY_USERID(state, diaryLogs){
        state.diaryLogs = diaryLogs;
    },
    GET_DIARYLOGS_BY_ID(state, id){
        state.diaryLogs = state.diaryLogs.filter(diaryLog => diaryLog.id === id);
    },
    UPDATE_DIARYLOG(state, updateLog){
        const index = state.diaryLogs.findIndex(diaryLog => diaryLog.id === updateLog.id);
        if(index !== -1){
            state.diaryLogs.splice(index,1, updateLog);
        }
    },
    REMOVE_DIARYLOG(state, id){
        state.diaryLogs = state.diaryLogs.filter(diaryLog => diaryLog.id !== id);
    }
};

export const diaryLogs = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
export default{
    state,
    getters,
    actions,
    mutations
};