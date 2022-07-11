import React, { useState } from 'react';
import $ from '../style.module.scss';

export default function Signup() {
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPw, setSignupPw] = useState('');
  const [signupPwConfirm, setSignupPwConfirm] = useState('');
  const [mismatchError, setMismatchError] = useState(false);

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignupName(e.target.value);
  };
  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignupEmail(e.target.value);
  };
  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignupPw(e.target.value);
  };
  const handleInputPwConfirm = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSignupPwConfirm(e.target.value);
  };

  const onClickSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
    console.log(mismatchError);
    if (signupName === '') {
      alert('이름을 입력해 주세요');
    } else if (signupEmail === '') {
      alert('아이디를 입력해 주세요');
    } else if (signupPw === '') {
      alert('비밀번호를 입력해 주세요');
    } else if (signupPw !== signupPwConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      // login success -> axios
    }
  };

  return (
    <div className={$.container}>
      <header>sign up</header>
      <input
        type="text"
        name="name"
        value={signupName}
        placeholder="NAME"
        onChange={handleInputName}
      />
      <input
        type="text"
        name="email"
        value={signupEmail}
        placeholder="EMAIL"
        onChange={handleInputEmail}
      />
      <input
        type="password"
        name="password"
        value={signupPw}
        placeholder="PASSWORD"
        onChange={handleInputPw}
      />
      <input
        type="password"
        name="password confirm"
        value={signupPwConfirm}
        placeholder="PASSWORD CONFIRM"
        onChange={handleInputPwConfirm}
      />
      <button className={$['signup']} type="submit" onClick={onClickSubmit}>
        회원가입
      </button>
    </div>
  );
}
