import { useState, useEffect } from 'react';
import $ from './style.module.scss';
import PlayListComponents from '../../components/Playlist';
import { Link } from 'react-router-dom';
import { AllPlayList } from '../../types/playlist';
import { LoadMyPlayList } from '../../api/LoadMyPlayListDetail';

export default function MyPlayList() {
  const [allPlaylist, setAllPlaylist] = useState<AllPlayList[]>([]);

  const getPlayListData = () => {
    LoadMyPlayList(1)
      .then(response => {
        const responseAllPlaylist: AllPlayList[] = response;
        setAllPlaylist(responseAllPlaylist);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPlayListData();
  }, []);

  return (
    <div className={$.container}>
      <section>
        <div className={$['playlist-title']}>Name의 Playlists</div>
        <hr />
        <div className={$['playlist-container']}>
          {allPlaylist.map((playlist: AllPlayList) => {
            return (
              <Link to={'/myplaylist/' + playlist.id} key={playlist.id}>
                <div className={$['playlist-center']}>
                  <PlayListComponents
                    id={playlist.id}
                    title={playlist.title}
                    playlist={playlist.playlist}
                    playlist_title={playlist.playlist_title}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
