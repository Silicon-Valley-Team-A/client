import $ from './style.module.scss';
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartFill,
  BsFillSkipEndFill,
} from 'react-icons/bs';

interface Props {
  isPlaying: boolean;
  currentSong: string;
  currentSinger: string;
}

export default function MusicPlayer({
  isPlaying,
  currentSong,
  currentSinger,
}: Props) {
  return (
    <div className={$.content}>
      <div className={$['player-container']}>
        <section className={$['song-info']}>
          <div className={$['title']}>
            <p>{currentSong}</p>
          </div>
          <div className={$['singer']}>
            <p>{currentSinger}</p>
          </div>
        </section>
        <div className={$['controls']}>
          <BsFillSkipStartFill className={$['btn_action']} />
          {isPlaying ? (
            <BsFillPauseCircleFill className={$['btn_action']} />
          ) : (
            <BsFillPlayCircleFill className={$['btn_action']} />
          )}
          <BsFillSkipEndFill className={$['btn_action']} />
        </div>
      </div>
      <div className={$['navigation']}>
        <div className={$['navigation_wrapper']}>
          <div className={$['seek_bar']} style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  );
}
