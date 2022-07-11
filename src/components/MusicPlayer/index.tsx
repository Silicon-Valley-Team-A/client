import $ from './style.module.scss';
import { useRef } from 'react';
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartFill,
  BsFillSkipEndFill,
} from 'react-icons/bs';
import { setCurrentSong, Song, Songs } from '../../types/playlist';

interface Props {
  songs: Songs;
  isPlaying: boolean;
  setisplaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioElem: React.RefObject<HTMLAudioElement>;
  currentSong: Song;
  setCurrentSong: setCurrentSong;
}

export default function MusicPlayer({
  songs,
  isPlaying,
  setisplaying,
  audioElem,
  currentSong,
  setCurrentSong,
}: Props) {
  const clickRef = useRef<HTMLDivElement>(null);

  const adjustProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    if (clickRef.current?.clientHeight) {
      const width = clickRef.current.clientWidth;
      const offset = e.nativeEvent.offsetX;

      const divprogress = (offset / width) * 100;
      if (audioElem.current !== null) {
        audioElem.current.currentTime =
          (divprogress / 100) * currentSong.length;
      }
    }
  };
  const PlayPause = () => {
    if (setisplaying !== null) {
      setisplaying(!isPlaying);
    }
  };

  const skipBack = () => {
    const index = songs.findIndex(x => x.title === currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    if (audioElem.current !== null) {
      audioElem.current.currentTime = 0;
    }
  };

  const skiptoNext = () => {
    const index = songs.findIndex(x => x.title == currentSong.title);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    if (audioElem.current !== null) {
      audioElem.current.currentTime = 0;
    }
  };

  return (
    <div className={$.content}>
      <div className={$['player-container']}>
        <section className={$['song-info']}>
          <div className={$['title']}>
            <span>{currentSong.title}</span>
          </div>
          <div className={$['singer']}>
            <span>{currentSong.singer}</span>
          </div>
        </section>
        <div className={$['controls']}>
          <BsFillSkipStartFill className={$['btn_action']} onClick={skipBack} />
          {isPlaying ? (
            <BsFillPauseCircleFill
              className={$['btn_action']}
              onClick={PlayPause}
            />
          ) : (
            <BsFillPlayCircleFill
              className={$['btn_action']}
              onClick={PlayPause}
            />
          )}
          <BsFillSkipEndFill className={$['btn_action']} onClick={skiptoNext} />
        </div>
      </div>
      <div className={$['navigation']}>
        <div
          className={$['navigation_wrapper']}
          ref={clickRef}
          onClick={adjustProgress}
        >
          <div
            className={$['seek_bar']}
            style={{ width: `${currentSong.progress + '%'}` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
