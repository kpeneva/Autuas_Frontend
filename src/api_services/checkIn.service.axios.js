import API from "../_backend/api"

export const checkInServices = {
    saveDailyCheckIn
}

function saveDailyCheckIn(dailyCheckIn){
    return API.post('/dailycheckin',JSON.stringify(dailyCheckIn));
}
