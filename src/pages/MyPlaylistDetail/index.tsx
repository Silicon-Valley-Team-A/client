import React, { useState } from 'react';
import Table from '../../components/Table';
import '../MyPlaylist/myplaylist.scss';

export default function MyPlayListDetail() {
  return (
    <div className="container">
      <div className="inside-container">
        <h2 className="playlist-title">Playlist 1</h2>
        <hr />
        <Table />
      </div>
    </div>
  );
}
