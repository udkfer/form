import { api } from "./api";

export async function getPosts() {
  const response = await api.get("/posts");
  return response.data;
}

export async function getPost(id) {
  const response = await api.get(`/posts/${id}`);
  return response.data;
}

export async function createPost(post) {
  const response = await api.post("/posts", post);
  return response.data;
}

export async function updatePost(id, post) {
  const response = await api.put(`/posts/${id}`, post);
  return response.data
}

export async function deletePost(id) {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
}
