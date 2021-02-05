import axios from 'axios';

const apiBook = axios.create({
    baseURL: "http://localhost:2407",
})

export default apiBook;