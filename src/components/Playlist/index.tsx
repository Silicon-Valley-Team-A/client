import React from 'react';
import $ from './style.module.scss';
import { AllPlayList, PlayList } from '../../types/playlist';

export default function PlayListComponents(playlist: AllPlayList) {
  return (
    <section>
      <div className={$.playlist}>
        {playlist.playlist.map((music: PlayList) => {
          return (
            <div className={$['playlist-thumbnail']}>
              <img src={music.imgurl} />
            </div>
          );
        })}
      </div>
      <div className={$['playlist-name']}>Playlist {playlist.id}</div>
    </section>
  );
}
