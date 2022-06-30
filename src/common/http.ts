import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
