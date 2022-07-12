import $ from './style.module.scss';
import {
  BsFillPauseCircleFill,
  BsFillPlayCircleFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from 'react-icons/bs';
import { memo } from 'react';

interface Props {
  isPause: boolean;
  skipToPrevSong: () => void;
  togglePlayBtn: () => void;
  skipToNextSong: () => void;
}

export function Controls({
  isPause,
  skipToPrevSong,
  togglePlayBtn,
  skipToNextSong,
}: Props) {
  return (
    <div className={$['controls']}>
      <BsFillSkipStartFill
        className={$['btn_action']}
        onClick={skipToPrevSong}
      />
      {!isPause ? (
        <BsFillPauseCircleFill
          className={$['btn_action']}
          onClick={togglePlayBtn}
        />
      ) : (
        <BsFillPlayCircleFill
          className={$['btn_action']}
          onClick={togglePlayBtn}
        />
      )}
      <BsFillSkipEndFill className={$['btn_action']} onClick={skipToNextSong} />
    </div>
  );
}

export default memo(Controls);
