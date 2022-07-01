import React, { useState, useEffect } from 'react';

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

  const onClickSubmit = (e: any): void => {
    e.preventDefault();
  };

  return (
    <div>
      <input
        type="text"
        name="id"
        value={inputId}
        placeholder="아이디를 입력해주세요"
        onChange={handleInputId}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        value={inputPw}
        onChange={handleInputPw}
      />
      <button type="submit" onClick={onClickSubmit}>
        로그인
      </button>
    </div>
  );
}
