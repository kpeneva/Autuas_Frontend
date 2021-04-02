import API from "../_backend/api";

export const userAxiosService = {
  login,
  logout,
  register,
  getAll,
  getUserById,
  update,
  deleteUser,
};

function login(username, password) {
  return API.post(`/login`, {
    username: username,
    password: password,
  });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {
  return API.post(`/register`, JSON.stringify(user));
}

function getAll() {
   return API.get('/');
}

function getUserById(id) {
  console.log(id);
  return API.get(`users/${id}`, { data: { id } });
}

function update(updatedUser) {
  return API.put(`/${updatedUser.userId}`,  JSON.stringify(updatedUser));
}

function deleteUser(id) {
  return API.delete(`${id}`, {
    id: id,
  });
}
