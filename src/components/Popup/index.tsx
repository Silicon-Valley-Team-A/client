import $ from './style.module.scss';

interface Props {
  text: string;
}

export default function Popup({ text }: Props) {
  return (
    <div className={$.popup}>
      <span>{text}</span>
    </div>
  );
}
