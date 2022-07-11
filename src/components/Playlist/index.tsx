import $ from './style.module.scss';
import { AllPlayList, PlayList } from '../../types/playlist';

export default function PlayListComponents(playlist: AllPlayList) {
  return (
    <section>
      <div className={$.playlist}>
        {playlist.playlist.map((music: PlayList) => {
          return (
            <div className={$['playlist-thumbnail']} key={music.id}>
              <img src={music.imgurl} />
            </div>
          );
        })}
      </div>
      <div className={$['playlist-name']}>{playlist.playlist_title}</div>
    </section>
  );
}
