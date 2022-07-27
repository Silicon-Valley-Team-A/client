import { checkAuthentication } from '../api/Auth';

export const isLogin = () => localStorage.getItem('userId');

//user_id체크 대신 api 이용하도록 수정 예정
export const isLogined = () => {
  checkAuthentication()
    .then(res => {
      if (res.status === 'success') return true;
      else return false;
    })
    .catch(err => {
      console.log(err);
    });
};
