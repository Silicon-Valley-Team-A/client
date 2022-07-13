import { Song } from './playlist';

export type MusicInfo = Song & {
  selected: boolean;
};

export type ImageGenre = {
  image: File;
  genre: string;
};

export type MusicList = Omit<MusicInfo, 'selected'>;

export type PlayListInfo = {
  user_id: number;
  name: string;
  tag: string;
  songs: MusicList[];
};
