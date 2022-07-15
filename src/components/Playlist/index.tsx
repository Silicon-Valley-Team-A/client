import $ from './style.module.scss';
import { AllPlayList, Song } from '../../types/playlist';

export default function PlayListComponents(playlist: AllPlayList) {
  return (
    <section>
      <div className={$.playlist}>
        {playlist.playlist.map((music: Song) => {
          console.log(music);
          return (
            <div className={$['playlist-thumbnail']} key={music.id}>
              <img src={music.image_album} />
            </div>
          );
        })}
      </div>
      <div className={$['playlist-name']}>{playlist.playlist_title}</div>
    </section>
  );
}
