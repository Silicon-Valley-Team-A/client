import $ from './style.module.scss';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={$.header}>
      <nav>
        <div>
          <Link to="/home">
            <Logo />
          </Link>
        </div>
        <div>
          <span>
            <Link to="/signin">로그인</Link>
          </span>
          <span>
            <Link to="/playlist">플레이 리스트</Link>
          </span>
        </div>
      </nav>
    </header>
  );
}
