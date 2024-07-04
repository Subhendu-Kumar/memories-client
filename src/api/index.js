import axios from "axios";

const URL = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (newPost) => axios.post(`${URL}/posts`, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${URL}/posts/${id}`, updatedPost)
