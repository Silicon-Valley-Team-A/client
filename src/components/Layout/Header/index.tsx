import $ from './style.module.scss';
import { LogOut, checkAuthentication } from '../../../api/Auth';
import Logo from '../../Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Header() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    checkAuthentication()
      .then(res => {
        console.log(res);
        if (res.status === 'success') setAuth(true);
        else setAuth(false);
      })
      .catch(err => {
        console.log(err);
      });
  });

  const onClickLogout = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void => {
    LogOut()
      .then(res => {
        if (res.status === 'success') {
          alert('로그아웃 하였습니다');
          navigate(`/`);
        } else {
          alert('로그아웃에 실패하였습니다');
        }
      })
      .catch(error => {
        console.log(error);
        alert('로그아웃에 실패하였습니다');
      });
  };

  const onClickPlaylist = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ) => {
    auth ? navigate('/myplaylist') : navigate('/signin');
  };

  return (
    <header className={$.header}>
      <nav>
        <div>
          <Link to="/home">
            <Logo />
          </Link>
        </div>
        <div>
          {auth ? (
            <span onClick={onClickLogout}>로그아웃</span>
          ) : (
            <span>
              <Link to="/signin">로그인</Link>
            </span>
          )}
          <span onClick={onClickPlaylist}>플레이리스트</span>
        </div>
      </nav>
    </header>
  );
}
