import $ from './style.module.scss';
import Logo from '../Logo';
import { Link, useNavigate } from 'react-router-dom';
import { isLogin, LogOut } from '../../api/Auth';

export default function Header() {
  const navigate = useNavigate();

  const onClickLogout = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void => {
    LogOut()
      .then(res => {
        if (res.success) {
          localStorage.removeItem('userId');
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
    isLogin() ? navigate('/myplaylist') : alert('로그인 후 이용해 주세요');
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
          {isLogin() ? (
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
