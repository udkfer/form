import { api } from "./api";

export async function getUsers() {
  const response = await api.get("/users");
  return response.data;
}

export async function getUser(id) {
  const response = await api.get(`/users/${id}`);
  return response.data;
}

export async function createUser(user) {
  const response = await api.post("/users", user);
  return response.data
}

export async function updateUser(id, user) {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
}

export async function deleteUser(id) {
  const response = await api.delete(`/users/${id}`);
  return response.data;
}

export async function loginUser(user) {
  const response = await api.post("/users/login", user);
  return response;
}
