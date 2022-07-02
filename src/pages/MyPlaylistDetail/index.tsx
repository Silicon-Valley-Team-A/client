import React, { useState } from 'react';
import HashTag from '../../components/HashTag';
import MusicPlayer from '../../components/MusicPlayer';
import Table from '../../components/Table';
import './myplaylistdetail.scss';

export default function MyPlayListDetail() {
  return (
    <div className="container-center">
      <div className="container">
        <div className="inside-container">
          <div className="playlist-header">
            <h2 className="playlist-title">Playlist 1</h2>
            <div>
              <div className="playlist-hashtag">
                <HashTag word="구름" />
                <HashTag word="하늘" />
              </div>
            </div>
          </div>
          <hr />
          <Table />
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
}
