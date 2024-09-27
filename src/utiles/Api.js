import axios from "axios";

export const getTodo = async (page, limit) => {
      return await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
    };
export const getOneTodo = async (id) => {
      return await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
    };