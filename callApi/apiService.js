import axios from 'axios';

const instance = axios.create({
    baseURL:'http://192.168.0.101:3000/api',
    timeout: 5000,
});

export default instance;