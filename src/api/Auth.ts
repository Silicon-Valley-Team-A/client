import AuthServices from '../services/AuthServices';
import { SignupUser, User } from '../types/auth';

export const AuthenticateUser = async (user: User) => {
  try {
    const res = await AuthServices.postSignin(user);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const LogOut = async () => {
  try {
    const res = await AuthServices.postLogout();
    return Promise.resolve(res.data);
  } catch (err) {
    Promise.reject(err);
  }
};

export const Register = async (SignupUser: SignupUser) => {
  try {
    const res = await AuthServices.postSignUp(SignupUser);
    return Promise.resolve(res.data);
  } catch (err) {
    Promise.reject(err);
  }
};

export const checkAuthentication = async () => {
  try {
    const res = await AuthServices.getAuth();
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    Promise.resolve(err);
  }
};

export const SetCSRF = async () => {
  try {
    const res = await AuthServices.getCSRF();
    return Promise.resolve(res.data);
  } catch (err) {
    Promise.resolve(err);
  }
};
