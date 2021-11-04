import axios from "axios";

const api = axios.create({
  baseURL: "https://coopers-back.herokuapp.com/api/",
});

export default api;