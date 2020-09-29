import axios from "axios";

const instance = axios.create({
  baseURL: "https://trilder-backend.herokuapp.com",
});

export default instance;
