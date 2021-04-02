import API from "../_backend/api";

export const goalsAxiosService = {
  addGoal,
  getAllGoals,
  getGoalsByUserId,
  getGoalById,
  removeGoal,
  updateGoal,
};

function addGoal(goal) {
  return API.post(`/goals`, JSON.stringify(goal));
}
function getAllGoals() {
  return API.get(`/goals`);
}
function getGoalById(id) {
  return API.get(`/goals/${id}`, id);
}
function getGoalsByUserId(userId) {
  return API.get(`/goals/users/${userId}`,  { data: { userId } });
}
function removeGoal(id, userId) {
  return API.delete(`/goals/${id}/${userId}`, {  data:{  id: id,
    userId: userId,}
  });
}
function updateGoal(updateGoal) {
  return API.put(`/goals/${updateGoal.id}/${updateGoal.userId}`,  JSON.stringify(updateGoal));
}
