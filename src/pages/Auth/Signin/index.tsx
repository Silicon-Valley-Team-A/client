import React, { useState, useEffect } from 'react';
import $ from './style.module.scss';

export default function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputId(e.target.value);
    console.log(inputId);
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputPw(e.target.value);
  };

  const onClickSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
  };

  return (
    <div className={$.container}>
      <input
        type="text"
        name="id"
        value={inputId}
        placeholder="ID"
        onChange={handleInputId}
      />
      <input
        type="password"
        name="password"
        placeholder="PASSWORD"
        value={inputPw}
        onChange={handleInputPw}
      />
      <div style={{ display: 'flex' }}>
        <button type="submit" className={$['signin']} onClick={onClickSubmit}>
          로그인
        </button>
        <button type="submit" className={$['signup']} onClick={onClickSubmit}>
          회원가입
        </button>
      </div>
    </div>
  );
}
