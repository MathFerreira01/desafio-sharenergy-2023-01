import axios from 'axios';

const apiUsers = axios.create({
    baseURL: 'https://randomuser.me/api/',
});

export default apiUsers;
