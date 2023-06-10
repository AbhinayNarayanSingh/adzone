import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api.abhinaysingh.com',
});

request.interceptors.request.use((config) => {

    return config;
});


const services = {
    get: (endpoint, params) => request.get(endpoint(), { params }),
    post: (endpoint, data) => request.post(endpoint(), data),
    put: (endpoint, data) => request.put(endpoint(), data),
    delete: (endpoint) => request.delete(endpoint()),
};

export default services