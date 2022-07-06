import $ from './style.module.scss';

interface Props {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: Props) {
  return (
    <button className={$.btn} onClick={() => onClick && onClick()}>
      {text}
    </button>
  );
}
