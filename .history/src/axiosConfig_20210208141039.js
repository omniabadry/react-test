import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes/",
});