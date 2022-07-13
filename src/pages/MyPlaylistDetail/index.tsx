import { useEffect, useRef, useState } from 'react';
import HashTag from '../../components/HashTag';
import MusicPlayer from '../../components/MusicPlayer';
import Table from '../../components/Table';
import $ from './style.module.scss';
import { songsdata } from '../../components/MusicPlayer/audio';

export default function MyPlayListDetail() {
  const [songs, setSongs] = useState(songsdata);
  const [isPlaying, setisPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);

  const audioElem = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioElem.current) {
      if (isPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }
  }, [isPlaying]);

  const onPlaying = () => {
    if (audioElem.current) {
      const duration = audioElem.current.duration;
      const ct = audioElem.current.currentTime;

      setCurrentSong({
        ...currentSong,
        progress: (ct / duration) * 100,
        length: duration,
      });
    }
  };

  return (
    <div className={$.container_detail}>
      <div className={$.container}>
        <section>
          <div className={$['playlist-header']}>
            <h2 className={$['playlist-title']}>playlist 1</h2>
            <div className={$['hashtag']}>
              <div className={$['playlist-hashtag']}>
                <HashTag word="구름" />
                <HashTag word="하늘" />
              </div>
            </div>
          </div>
          <hr />
          <Table />
        </section>
      </div>
      {/* <audio ref={audioElem} src={currentSong.file} onTimeUpdate={onPlaying} /> */}
      {/* <MusicPlayer
        songs={songs}
        isPause={isPlaying}
        setisplaying={setisPlaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      /> */}
    </div>
  );
}
