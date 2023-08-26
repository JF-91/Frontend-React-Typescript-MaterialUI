import axios from "axios";

const BASE_RUL = "https://rickandmortyapi.com/api/";

export const instance = axios.create({
    baseURL:BASE_RUL
})