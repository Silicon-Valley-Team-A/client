export type PlayList = {
  title: string;
  singer: string;
  imgurl: string;
};
export type AllPlayList = {
  id: number;
  playlist: PlayList[];
};
