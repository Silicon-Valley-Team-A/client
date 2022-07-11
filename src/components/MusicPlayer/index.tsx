import $ from './style.module.scss';
import { useRef } from 'react';
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartFill,
  BsFillSkipEndFill,
} from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  toggleAudio,
  skipPrevSong,
  skipNextSong,
  adjustSongTime,
} from '../../store/features/audioSlice';

interface Props {
  isPause: boolean;
}

export default function MusicPlayer({ isPause }: Props) {
  const clickRef = useRef<HTMLDivElement>(null);
  const { playList, currentSongIdx, progress } = useAppSelector(
    state => state.audios,
  );
  const dispatch = useAppDispatch();

  const { title, artist, file, duration, length } = playList[currentSongIdx];
  const audioElement = useRef<HTMLAudioElement>(null);

  const adjustProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    // if (clickRef.current?.clientHeight) {
    //   const width = clickRef.current?.clientWidth;
    //   const offset = e.nativeEvent.offsetX;
    //   const divprogress = (offset / width) * 100;
    //   if (audioElem.current !== null) {
    //     audioElem.current.currentTime =
    //       (divprogress / 100) * currentSong.length;
    //   }
    // }

    if (clickRef.current?.clientHeight) {
      const clientWidth = clickRef.current?.clientWidth;
      const offsetX = e.nativeEvent.offsetX;
      const divprogress = (offsetX / clientWidth) * 100;

      if (audioElement.current !== null) {
        audioElement.current.currentTime = (divprogress / 100) * length;

        const currentTime = audioElement.current.currentTime;
        dispatch(adjustSongTime((currentTime / duration) * 100));
      }
    }
  };

  return (
    <div className={$.content}>
      <div className={$['player-container']}>
        <section className={$['song-info']}>
          <div className={$['title']}>
            <span>{title}</span>
          </div>
          <div className={$['artist']}>
            <span>{artist}</span>
          </div>
        </section>
        <div className={$['controls']}>
          <BsFillSkipStartFill
            className={$['btn_action']}
            onClick={() => dispatch(skipPrevSong())}
          />
          {isPause ? (
            <BsFillPauseCircleFill
              className={$['btn_action']}
              onClick={() => dispatch(toggleAudio())}
            />
          ) : (
            <BsFillPlayCircleFill
              className={$['btn_action']}
              onClick={toggleAudio}
            />
          )}
          <BsFillSkipEndFill
            className={$['btn_action']}
            onClick={() => dispatch(skipNextSong())}
          />
        </div>
        <audio ref={audioElement} src={file} />
      </div>
      <div className={$['navigation']}>
        <div
          className={$['navigation_wrapper']}
          ref={clickRef}
          onClick={adjustProgress}
        >
          <div
            className={$['progress_bar']}
            style={{ width: `${progress + '%'}` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
