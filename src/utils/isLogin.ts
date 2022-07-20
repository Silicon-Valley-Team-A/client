import { checkAuthentication } from '../api/Auth';

export const isLogin = () => !!localStorage.getItem('userId');

export const isLogined = async () => {
  return checkAuthentication()
    .then(res => {
      if (res.status === 'success') return true;
      else return false;
    })
    .catch(err => {
      console.log(err);
    });
};
