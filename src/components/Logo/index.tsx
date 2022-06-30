import $ from './style.module.scss';

export default function Logo() {
  return (
    <div className={$.logo}>
      <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" />
    </div>
  );
}
