import './hashtag.scss';
interface Props {
  word: string;
}

export default function HashTag({ word }: Props) {
  return (
    <p className="hashtag">
      <strong>#</strong> {word}
    </p>
  );
}
