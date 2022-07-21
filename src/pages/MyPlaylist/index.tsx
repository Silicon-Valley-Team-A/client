import $ from './style.module.scss';
import { useState, useEffect } from 'react';
import PlayListComponents from '../../components/Playlist';
import { Link } from 'react-router-dom';
import { PlayListThumb } from '../../types/playlist';
import { LoadMyPlayList } from '../../api/LoadMyPlayListDetail';

export default function MyPlayList() {
  const [userName, setUserName] = useState('');
  const [allPlaylist, setAllPlaylist] = useState<PlayListThumb[]>([]);
  const [playlistTumbImg, setPlaylistThumbImg] = useState([]);

  const getPlayListData = () => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      LoadMyPlayList({ user_id: userId })
        .then(response => {
          console.log(response);
          const responseAllPlaylist: PlayListThumb[] = response.playlist;
          setAllPlaylist(responseAllPlaylist);
          setUserName(response.username);
          setPlaylistThumbImg(response.image);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    getPlayListData();
  }, []);

  return (
    <div className={$.container}>
      <section>
        <div className={$['playlist-title']}>{userName}의 Playlists</div>
        <hr />
        <div className={$['playlist-container']}>
          {allPlaylist?.map((playlist: PlayListThumb, index) => {
            return (
              <Link to={'/myplaylist/' + playlist.id} key={playlist.id}>
                <div className={$['playlist-center']}>
                  <PlayListComponents
                    id={playlist.id}
                    playlist_name={playlist.name}
                    thumbnail={playlistTumbImg[index]}
                    index={index + 1}
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
