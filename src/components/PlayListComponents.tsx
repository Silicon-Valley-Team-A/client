import React from 'react';
import '../styles/myplaylist.scss';

function PlayListComponents(playlist: any) {
  console.log(playlist);
  return (
    <div>
      <div className="playlist">
        {playlist.playlist.map((music: any) => {
          return (
            <div className="playlist-thumbnail">
              <img src={music.imgurl} />
            </div>
          );
        })}
      </div>
      <div>playlist 1</div>
    </div>
  );
}

export default PlayListComponents;
