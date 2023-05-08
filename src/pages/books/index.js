import axios from "../../api/axios";

const API_URL = 'book/?sort_by=year&order_by=desc';

export const getBooks = () => {
  return axios.get(API_URL );
};

export const getBookById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createBook = (book) => {
  return axios.post(API_URL, book);
};

export const updateBook = (id, book) => {
  return axios.put(`${API_URL}/${id}`, book);
};

export const deleteBook = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
