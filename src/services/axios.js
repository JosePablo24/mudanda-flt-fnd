import axios from 'axios';

export const API = axios.create({
    baseURL:`http://127.0.0.1:3333/api/v1/`
    // baseURL:`https://mexicoretos.herokuapp.com/api/`
});