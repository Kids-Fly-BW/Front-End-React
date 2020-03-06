import axios from 'axios';

const axiosWithAuth = () => {
    return axios.create({

    // add 'endpoint' for token to baseURL
    baseURL: 'https://kidfly.herokuapp.com/api',
    headers: {
        Authorization: localStorage.getItem('token')
    }
});
};


export default axiosWithAuth