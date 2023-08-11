import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_API_KEY
    },
})