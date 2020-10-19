import axios from "axios";

export const api = {
    default:{
        client: axios.create({
            baseURL: "https://reqres.in/api",
            responseType: 'json'
        })
    }
};

export default api;
