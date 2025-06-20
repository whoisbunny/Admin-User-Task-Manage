export const BaseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const API = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});

export default API;
