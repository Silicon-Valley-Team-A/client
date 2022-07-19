import $ from './style.module.scss';
import { useCallback, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  toggleAudio,
  skipPrevSong,
  skipNextSong,
  adjustSongTime,
} from '../../store/features/audioSlice';
import Controls from './Controls';
import CdPlayer from '../../Icon/CdPlayer';

export default function MusicPlayer() {
  const { isPause, playList, currentSongIdx, progress } = useAppSelector(
    state => state.audios,
  );
  const dispatch = useAppDispatch();

  const { title, artist, file, image_album, duration } =
    playList[currentSongIdx];
  const audioRef = useRef<HTMLAudioElement>(null);
  const clickRef = useRef<HTMLDivElement>(null);

  const updateProgress = useCallback(() => {
    if (audioRef.current && duration) {
      const duration = audioRef.current.duration;
      const currentTime = audioRef.current.currentTime;

      if (currentTime >= duration) {
        dispatch(skipNextSong());
        audioRef.current.currentTime = 0;
        return;
      }
      dispatch(adjustSongTime((currentTime / duration) * 100));
    }
  }, []);

  const adjustProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    if (clickRef.current && audioRef.current) {
      const clientWidth = clickRef.current?.clientWidth;
      const offsetX = e.nativeEvent.offsetX;
      const divprogress = (offsetX / clientWidth) * 100;
      const newTime = divprogress / 100;

      audioRef.current.currentTime = audioRef.current.duration * newTime;
      dispatch(adjustSongTime(newTime * 100));
    }
  };

  const initialTime = () => {
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const togglePlayBtn = useCallback(() => {
    isPause ? audioRef.current?.play() : audioRef.current?.pause();
    dispatch(toggleAudio());
  }, []);

  const skipToPrevSong = useCallback(() => {
    dispatch(skipPrevSong());
    initialTime();
  }, []);

  const skipToNextSong = useCallback(() => {
    dispatch(skipNextSong());
    initialTime();
  }, []);

  if (!isPause) audioRef.current?.play();

  useEffect(() => {
    if (!isPause) audioRef.current?.play();
  }, []);

  return (
    <div className={$.content}>
      <div className={$['player-container']}>
        <section className={$['song-info']}>
          <CdPlayer src={image_album} alt={`${title}의 앨범 커버`} />
          <div className={$['info']}>
            <span className={$['title']}>{title}</span>
            <span className={$['artist']}>{artist}</span>
          </div>
        </section>
        <Controls
          {...{ isPause, skipToPrevSong, togglePlayBtn, skipToNextSong }}
        />
        <audio
          ref={audioRef}
          src={file}
          onTimeUpdate={() => !isPause && updateProgress()}
        />
      </div>

      <div className={$['navigation']}>
        <div
          className={$['navigation_wrapper']}
          ref={clickRef}
          onClick={adjustProgress}
        >
          <div
            className={$['progress_bar']}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
