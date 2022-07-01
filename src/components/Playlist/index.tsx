import React from 'react';
import './playlistComponent.scss';

export default function PlayListComponents(playlist: any) {
  return (
    <section>
      <div className="playlist">
        {playlist.playlist.map((music: any) => {
          return (
            <div className="playlist-thumbnail">
              <img src={music.imgurl} />
            </div>
          );
        })}
      </div>
      <div className="playlist-name">Playlist {playlist.id}</div>
    </section>
  );
}
