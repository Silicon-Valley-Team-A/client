import $ from './style.module.scss';

interface Props {
  title: string;
  more: string;
  icon: JSX.Element;
}

export default function TextBox({ title, more, icon }: Props) {
  return (
    <div className={$['text-box']}>
      <div className={$.title}>
        <span>{icon}</span>
        <strong>{title}</strong>
      </div>

      <span>{more}</span>
    </div>
  );
}
