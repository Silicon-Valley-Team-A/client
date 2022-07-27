import $ from './style.module.scss';
import HashTag from '../../components/HashTag';
import Button from '../../components/Button';
import MyPlaylistTable from '../../components/MyPlaylistTable';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MusicInfo } from '../../types/main';
import { LoadMyPlayListDetail } from '../../api/LoadMyPlayListDetail';
import { setSongList } from '../../store/features/audioSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { LoadMyPlayList } from '../../api/LoadMyPlayListDetail';

interface LoadUserPlaylistInfo {
  userId: string;
  id: string;
}

interface LoadPlaylistInfo {
  id: number;
  name: string;
  tag: string;
}

export default function MyPlayListDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [allPlayList, setAllPlayList] = useState<MusicInfo[]>([]);
  const [hashtag, setHashTag] = useState('');
  const [playlistTitle, setPlaylistTitle] = useState('');

  const getPlaylistDetailData = ({ userId, id }: LoadUserPlaylistInfo) => {
    LoadMyPlayList({ user_id: userId }).then(res => {
      res.playlist.map((playlist: LoadPlaylistInfo) => {
        if (playlist.id === parseInt(id)) {
          setPlaylistTitle(playlist.name);
          setHashTag(playlist.tag);
        }
      });
    });
  };

  const getPlaylistTableData = (playlist_id: string) => {
    LoadMyPlayListDetail(playlist_id)
      .then(data => {
        const list = data.map((list: MusicInfo) => {
          return { ...list, selected: false };
        });
        setAllPlayList(list);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    //const userId = localStorage.getItem('userId');
    const { userId } = useAppSelector(state => state.user);
    console.log(userId);
    if (userId && id) {
      getPlaylistTableData(id);
      getPlaylistDetailData({ userId, id });
    }
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
            <h2 className={$['playlist-title']}>{playlistTitle}</h2>
            <div className={$['hashtag']}>
              <div className={$['playlist-hashtag']}>
                <Button text={'플레이리스트 재생'} onClick={playAllPlaylist} />
                <HashTag word={hashtag} />
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
