import React, { useState, useEffect } from 'react';
import './myplaylist.scss';
import axios from 'axios';
import PlayListComponents from '../../components/Playlist';
import { Link } from 'react-router-dom';

export default function MyPlayList() {
  type PlayList = {
    title: string;
    singer: string;
    imgurl: string;
  };
  type AllPlayList = {
    id: number;
    playlist: PlayList[];
  };

  const [allPlaylist, setAllPlaylist] = useState<AllPlayList[]>([]);

  const getPlayListData = () => {
    axios
      .get('http://localhost:8888/myplaylist')
      .then(response => {
        const responseAllPlaylist: AllPlayList[] = response.data.map(
          (responseAllPlaylist: any) => {
            return {
              id: responseAllPlaylist.id,
              playlist: responseAllPlaylist.list,
            };
          },
        );

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
    <div className="container">
      <div className="inside-container">
        <div className="playlist-title">Name의 Playlists</div>
        <hr />
        <div className="playlist-container">
          {allPlaylist.map((music: any) => {
            return (
              <Link to={'/myplaylist/' + music.id}>
                <PlayListComponents
                  key={music.id}
                  id={music.id}
                  playlist={music.playlist}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
