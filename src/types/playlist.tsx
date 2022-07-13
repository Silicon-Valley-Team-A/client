export type PlayList = {
  id: number;
  title: string;
  artist: string;
  imgurl: string;
};

export type AllPlayList = {
  playlist_title: string;
  id: number;
  title: string;
  playlist: PlayList[];
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
