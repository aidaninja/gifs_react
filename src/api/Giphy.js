import axios from 'axios';

const giphy = axios.create({
        baseURL: 'https://api.giphy.com',
    });

export default giphy;