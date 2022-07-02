import React, { useRef } from 'react';
import './musicplayer.scss';
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartFill,
  BsFillSkipEndFill,
} from 'react-icons/bs';

export default function MusicPlayer() {
  const isplaying = true;

  return (
    <div className="player_container">
      <div className="player_info">
        <section className="song_info">
          <div className="title">
            <p>Rain</p>
          </div>
          <div className="singer">
            <p>태연</p>
          </div>
        </section>
        <div className="controls">
          <BsFillSkipStartFill className="btn_action" />
          {isplaying ? (
            <BsFillPauseCircleFill className="btn_action" />
          ) : (
            <BsFillPlayCircleFill className="btn_action pp" />
          )}
          <BsFillSkipEndFill className="btn_action" />
        </div>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper">
          <div className="seek_bar"></div>
        </div>
      </div>
    </div>
  );
}
