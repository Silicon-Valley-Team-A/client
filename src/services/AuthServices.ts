import http from '../common/http';
import { User, SignupUser } from '../types/auth';
import axios from 'axios';

const postSignin = (user: User) => http.post(`login`, user);
const postLogout = () => http.post(`logout`, {});
const postSignUp = (user: SignupUser) => http.post(`register`, user);
const getAuth = () => http.get(`authenticated`);
const getCSRF = () => http.get(`csrf_cookie`);
const AuthServices = {
  postSignin,
  postLogout,
  postSignUp,
  getAuth,
  getCSRF,
};

export default AuthServices;
