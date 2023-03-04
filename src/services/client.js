import axios from "axios";

const baseURL = "https://rest-server-basic-production-bc65.up.railway.app/api";

export default axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
