import axios from 'axios';
import { Cookies } from 'react-cookie';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
const cookie = new Cookies();
export const http = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
