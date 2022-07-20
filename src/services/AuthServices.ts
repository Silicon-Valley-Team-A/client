import http from '../common/http';
import { User, SignupUser } from '../types/auth';
import axios from 'axios';
axios.defaults.withCredentials = true;

const postSignin = (user: User) =>
  http.post(`login`, user, { withCredentials: true });
const postLogout = () => http.post(`logout`, {}, { withCredentials: true });
const postSignUp = (user: SignupUser) =>
  http.post(`register`, user, { withCredentials: true });
const getAuth = () => http.get(`authenticated`, { withCredentials: true });

const AuthServices = {
  postSignin,
  postLogout,
  postSignUp,
  getAuth,
};

export default AuthServices;
