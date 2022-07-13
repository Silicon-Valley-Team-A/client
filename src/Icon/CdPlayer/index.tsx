import { useAppSelector } from '../../store';
import $ from './style.module.scss';

interface Props {
  src: string;
  alt: string;
}

export default function CdPlayer({ src, alt }: Props) {
  const isPause = useAppSelector(state => state.audios.isPause);
  return (
    <div className={$['player-album']}>
      <img
        src={src}
        alt={alt}
        className={$[!isPause ? 'album-img' : 'album-img-acive']}
      />
      <div></div>
    </div>
  );
}
