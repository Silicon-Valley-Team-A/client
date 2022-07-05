import React, { useState } from 'react';
import HashTag from '../../components/HashTag';
import MusicPlayer from '../../components/MusicPlayer';
import Table from '../../components/Table';
import $ from './style.module.scss';

export default function MyPlayListDetail() {
  return (
    <div className={$.container_detail}>
      <div className={$.container}>
        <section>
          <div className={$['playlist-header']}>
            <h2 className={$['playlist-title']}>Playlist 1</h2>
            <div className={$['hashtag']}>
              <div className={$['playlist-hashtag']}>
                <HashTag word="구름" />
                <HashTag word="하늘" />
              </div>
            </div>
          </div>
          <hr />
          <Table />
        </section>
      </div>
      <MusicPlayer isPlaying={true} currentSong="Rain" currentSinger="태연" />
    </div>
  );
}
