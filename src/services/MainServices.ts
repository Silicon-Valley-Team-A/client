import http from '../common/http';
import { MusicInfo, ImageGenre } from '../types/main';

const getPlayList = (info: ImageGenre) =>
  http.get(`http://localhost:4000/playList/`);

const savePlayList = (list: MusicInfo[]) =>
  http.post(`http://localhost:4000/playList/save/`);

const MainServices = {
  getPlayList,
  savePlayList,
};

export default MainServices;
