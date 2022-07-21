import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
export const http = axios.create({
  baseURL: 'http://localhost/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
