import React, { useState } from 'react';
import $ from '../Signin/style.module.scss';

export default function Signup() {
  const [signupId, setSignupId] = useState('');
  const [signupPw, setSignupPw] = useState('');
  const [signupPwConfirm, setSignupPwConfirm] = useState('');
  const [mismatchError, setMismatchError] = useState(false);

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignupId(e.target.value);
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
    if (signupId === '') {
      alert('아이디를 입력해주세요');
    } else if (signupPw === '') {
      alert('비밀번호를 입력해주세요');
    } else if (signupPw !== signupPwConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      // login success -> axios
    }
  };

  return (
    <div className={$.container}>
      <input
        type="text"
        name="id"
        value={signupId}
        placeholder="ID"
        onChange={handleInputId}
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
