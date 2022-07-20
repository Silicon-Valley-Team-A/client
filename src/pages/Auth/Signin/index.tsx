import React, { useState } from 'react';
import $ from '../style.module.scss';
import { Link } from 'react-router-dom';
import { AuthenticateUser } from '../../../api/Auth';
import { User } from '../../../types/auth';
import { useNavigate } from 'react-router-dom';
import { isLogined } from '../../../utils/isLogin';

export default function Signin() {
  const navigate = useNavigate();

  const [signinEmail, setSigninEmail] = useState('');
  const [signinPw, setSigninPw] = useState('');

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSigninEmail(e.target.value);
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSigninPw(e.target.value);
  };
  const onClickSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
    if (signinEmail === '') {
      alert('아이디를 입력해 주세요');
    } else if (signinPw === '') {
      alert('비밀번호를 입력해 주세요');
    } else {
      const user: User = { email: signinEmail, password: signinPw };
      AuthenticateUser(user)
        .then(res => {
          if (res.status === 'success') {
            localStorage.setItem('userId', res.user_id);
            navigate('/');
          } else if (res.status === 'error') {
            {
              res.message === 'Error authenticating'
                ? alert('사용자가 존재하지 않습니다')
                : alert('아이디 또는 비밀번호를 확인해주세요');
            }
          }
        })
        .catch(error => {
          console.log(error);
          alert('로그인에 실패하였습니다');
        });
    }
  };

  return (
    <div className={$.container}>
      <div>
        <header>sign in</header>
        <input
          type="text"
          name="email"
          value={signinEmail}
          placeholder="EMAIL"
          onChange={handleInputEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="PASSWORD"
          value={signinPw}
          onChange={handleInputPw}
        />
        <div className={$['buttons']}>
          <button type="submit" className={$['signin']} onClick={onClickSubmit}>
            로그인
          </button>
          <Link to={'/signup'}>
            <button type="submit" className={$['goto-signup']}>
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
