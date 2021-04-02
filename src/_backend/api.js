import axios from "axios";

let instance = axios.create({
    baseURL: "https://localhost:44363/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token,
        'Access-Control-Allow-Origin' : '*'
    }
});

export default instance;