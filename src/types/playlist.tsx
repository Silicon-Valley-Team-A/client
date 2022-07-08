export type PlayList = {
  title: string;
  singer: string;
  imgurl: string;
};
export type AllPlayList = {
  playlist_title: string;
  id: number;
  playlist: PlayList[];
};
