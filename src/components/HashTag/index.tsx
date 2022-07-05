import $ from './style.module.scss';

interface Props {
  word: string;
}

export default function HashTag({ word }: Props) {
  return (
    <div className={$.hashtag}>
      <p># {word}</p>
    </div>
  );
}
