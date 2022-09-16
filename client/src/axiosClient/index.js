import axios from "axios";
import queryString from "query-string";

const url = "http://localhost:8080/api"
const token = localStorage.getItem("accessToken");
// console.log(token);
const axiosClient = axios.create({ 
    baseURL: url,
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    paramsSerializer: (params) => queryString.stringify(params)
})

export default axiosClient;