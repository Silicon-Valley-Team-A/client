import http from '../common/http';
import { PlayListInfo, ImageGenre } from '../types/main';

const getPlayList = (info: ImageGenre) =>
  http.get(`http://localhost:4000/playList/`);

const savePlayList = (list: PlayListInfo) =>
  http.post(`http://localhost:4000/playList/save/` + list);

const MainServices = {
  getPlayList,
  savePlayList,
};

export default MainServices;
