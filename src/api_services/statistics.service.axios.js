import API from "../_backend/api";

export const statisticsAxiosService = {
    getAllGoalsCount,
    getCompletedGoalsCount,
    getIncompletedGoalsCount,
    getPositiveFeelingsCount,
    getNegativeFeelingsCount
};

function getAllGoalsCount(userId){
    return API.get(`/statistics/allgoals/${userId}`);
}
function getCompletedGoalsCount(userId){
    return API.get(`/statistics/completedgoals/${userId}`);
}
function getIncompletedGoalsCount(userId){
    return API.get(`/statistics/incompletedgoals/${userId}`);
}
function getPositiveFeelingsCount(userId){
    return API.get(`/statistics/positivefeelings/${userId}`);
}
function getNegativeFeelingsCount(userId){
    return API.get(`/statistics/negativefeelings/${userId}`);
}
