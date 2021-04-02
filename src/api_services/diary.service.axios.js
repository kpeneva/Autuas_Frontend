import API from "../_backend/api";

export const diaryAxiosService = {
    addDiaryLog,
    getAllDiaryLogs,
    getDiaryLogsByUserId,
    getDiaryLogById,
    removeDiaryLog,
    updateDiaryLog,
};

function addDiaryLog(diaryLog){
    return API.post(`/diarylogs`,JSON.stringify(diaryLog));
}
function getAllDiaryLogs(){
    return API.get(`/diarylogs`);
}
function getDiaryLogsByUserId(userId){
    return API.get(`/diarylogs/users/${userId}`);
}
function getDiaryLogById(id){
    return API.get(`/diarylogs/${id}`);
}
function removeDiaryLog(id){
    return API.delete(`/diarylogs/${id}`);
}
function updateDiaryLog(updateLog){
    return API.put(`/diarylogs/${updateLog.id}`,JSON.stringify(updateLog));
}