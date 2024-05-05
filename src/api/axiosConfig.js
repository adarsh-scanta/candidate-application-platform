import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.weekday.technology/adhoc/",
});

export default instance;