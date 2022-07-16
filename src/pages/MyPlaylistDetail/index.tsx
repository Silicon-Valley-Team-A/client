import { useEffect, useState } from 'react';
import HashTag from '../../components/HashTag';
import $ from './style.module.scss';
import { MusicInfo } from '../../types/main';
import { LoadMyPlayListDetail } from '../../api/LoadMyPlayListDetail';
import Button from '../../components/Button';
import { setSongList } from '../../store/features/audioSlice';
import { useAppDispatch } from '../../store';
import MyPlaylistTable from '../../components/MyPlaylistTable';

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
          <MyPlaylistTable list={allPlayList} />
        </section>
      </div>
    </div>
  );
}

//<NewTable list={allPlayList} />
