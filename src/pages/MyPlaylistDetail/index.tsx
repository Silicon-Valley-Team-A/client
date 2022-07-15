import { useEffect, useRef, useState } from 'react';
import HashTag from '../../components/HashTag';
import Table from '../../components/Table';
import $ from './style.module.scss';
import { songsdata } from '../../components/MusicPlayer/audio';
import { MusicInfo } from '../../types/main';
import { LoadMyPlayListDetail } from '../../api/LoadMyPlayListDetail';
import { Song } from '../../types/playlist';
import NewTable from '../../components/NewTable';
import Button from '../../components/Button';
import { setSongList } from '../../store/features/audioSlice';
import { useAppDispatch } from '../../store';

export default function MyPlayListDetail() {
  const dispatch = useAppDispatch();
  const [allPlayList, setAllPlayList] = useState<MusicInfo[]>([]);

  useEffect(() => {
    LoadMyPlayListDetail(1)
      .then(data => {
        const list = data.map((list: MusicInfo) => {
          return { ...list, selected: false };
        });
        setAllPlayList(list);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const playAllPlaylist = () => {
    const playList = allPlayList.map(({ selected, ...remain }) => {
      return { ...remain };
    });
    dispatch(setSongList(playList));
  };

  return (
    <div className={$.container_detail}>
      <div className={$.container}>
        <section>
          <div className={$['playlist-header']}>
            <h2 className={$['playlist-title']}>playlist 1</h2>
            <div className={$['hashtag']}>
              <div className={$['playlist-hashtag']}>
                <Button text={'플레이리스트 재생'} onClick={playAllPlaylist} />
                <HashTag word="구름" />
                <HashTag word="하늘" />
              </div>
            </div>
          </div>
          <hr />
          <NewTable list={allPlayList} />
          {/*<Table list={playList} />*/}
        </section>
      </div>
    </div>
  );
}
