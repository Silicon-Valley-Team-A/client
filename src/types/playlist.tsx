export type PlayList = {
  id: number;
  title: string;
  artist: string;
  image_album: string;
};

export type AllPlayList = {
  playlist_title: string;
  id: number;
  title: string;
  playlist: Song[];
};

export type PlayListThumb = {
  id: number;
  name: string;
  tag: string;
};
export type PlayListThumbImage = {
  img: string;
};

export type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  file: string;
  title_album: string;
  image_album: string;
};

export type setCurrentSong = React.Dispatch<React.SetStateAction<Song>>;

export type userId = { user_id: string };
