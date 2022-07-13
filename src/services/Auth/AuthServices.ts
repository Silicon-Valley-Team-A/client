import http from '../../common/http';
import { User, SignupUser } from '../../types/auth';
import axios from 'axios';
axios.defaults.withCredentials = true;

const postSignin = (user: User) =>
  http.post(`login`, user, { withCredentials: true });
const getSignin = () => http.get(`login`);
const getLogout = () => http.post(`logout`);

const postSignUp = (user: SignupUser) =>
  http.post(`register`, user, { withCredentials: true });

const AuthServices = {
  postSignin,
  getSignin,
  getLogout,
  postSignUp,
};

export default AuthServices;
