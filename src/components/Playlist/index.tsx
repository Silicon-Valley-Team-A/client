import $ from './style.module.scss';

interface Props {
  id: number;
  playlist_name: string;
  thumbnail: { [key: number]: string[] };
  index: number;
}

export default function PlayListComponents({
  id,
  playlist_name,
  thumbnail,
  index,
}: Props) {
  return (
    <section>
      <div className={$.playlistcontainer}>
        <div className={$.playlist}>
          {thumbnail[index].map((thumbimg, index) => {
            return (
              <div
                className={$['playlist-thumbnail']}
                key={`${id}${thumbimg}${index}`}
              >
                <img src={thumbimg} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={$['playlist-name']}>{playlist_name}</div>
    </section>
  );
}
