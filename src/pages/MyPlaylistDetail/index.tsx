import { useEffect, useState } from 'react';
import HashTag from '../../components/HashTag';
import $ from './style.module.scss';
import { MusicInfo } from '../../types/main';
import { LoadMyPlayListDetail } from '../../api/LoadMyPlayListDetail';
import Button from '../../components/Button';
import { setSongList } from '../../store/features/audioSlice';
import { useAppDispatch } from '../../store';
import MyPlaylistTable from '../../components/MyPlaylistTable';
import { LoadMyPlayList } from '../../api/LoadMyPlayListDetail';
import { useParams } from 'react-router-dom';
import { isLogined } from '../../utils/isLogin';
interface Props {
  id: number;
  name: string;
  tag: string;
}
interface Props2 {
  userId: string;
  id: string;
}
export default function MyPlayListDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [allPlayList, setAllPlayList] = useState<MusicInfo[]>([]);
  const [hashtag, setHashTag] = useState('');
  const [playlistTitle, setPlaylistTitle] = useState('');

  const getPlaylistDetailData = ({ userId, id }: Props2) => {
    console.log(userId);
    LoadMyPlayList({ user_id: userId }).then(res => {
      res.playlist.map((playlist: Props) => {
        console.log(playlist);
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
        isLogined();
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
    const userId = localStorage.getItem('userId');
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
