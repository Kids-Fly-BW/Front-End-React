import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({

    // add 'endpoint' for token to baseURL
    baseURL: 'https://kidfly.herokuapp.com/api',
    headers: {
        Authorization: localStorage.getItem('token')
    }
});
};
