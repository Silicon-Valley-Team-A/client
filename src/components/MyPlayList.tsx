import React, { useState, useEffect } from 'react';
import '../styles/myplaylist.scss';
import axios from 'axios';
import PlayListComponents from './PlayListComponents';

function MyPlayList() {
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
    <div>
      <div className="container">
        <div className="inside-container">
          <h2 className="playlist-title">Name의 Playlists</h2>
          <hr />
          <div className="playlist-container">
            {allPlaylist.map((music: any) => {
              console.log(music);
              console.log(music.playlist);
              return <PlayListComponents playlist={music.playlist} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPlayList;
