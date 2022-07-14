import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
export const http = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
