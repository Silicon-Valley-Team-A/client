import React, { useState, useEffect } from 'react';
import $ from '../style.module.scss';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [signinId, setSigninId] = useState('');
  const [signinPw, setSigninPw] = useState('');

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSigninId(e.target.value);
    console.log(signinId);
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSigninPw(e.target.value);
  };

  const onClickSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
  };

  return (
    <div className={$.container}>
      <div>
        <header>sign in</header>
        <input
          type="text"
          name="id"
          value={signinId}
          placeholder="ID"
          onChange={handleInputId}
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
