import axios from 'axios';

const apiCode = axios.create({
    baseURL: 'https://http.cat',
});

export default apiCode;
