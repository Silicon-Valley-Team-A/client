import $ from './style.module.scss';

export default function Footer() {
  return (
    <footer className={$.footer}>
      <nav className={$['f-inner']}>
        <div className={$.info}>
          <ul className={$['f-menu']}>
            <li>개인정보처리방침</li>
            <li>이메일무단수집거부</li>
            <li>이용약관</li>
          </ul>
          <div className={$.more}>
            <span className={$.team}>실리콘 밸리 팀 D - 8DE</span>
            <span className={$.tel}>TEL.02.1111.2222</span>
          </div>
        </div>
      </nav>
    </footer>
  );
}
