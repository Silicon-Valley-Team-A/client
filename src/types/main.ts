export interface MusicInfo {
  id: string;
  title: string;
  artist: string;
  duration: number;
  file: string;
  title_album: string;
  image_album: string;
  selected: boolean;
}

export type ImageGenre = {
  image: File;
  genre: string;
};

export type PlayListInfo = {
  user_id: number;
  name: string;
  tag: string;
  songs: Omit<MusicInfo, 'selected'>[];
};
