import http from '../common/http';
import { PlayListInfo, ImageGenre } from '../types/main';

const getPlayList = (info: ImageGenre) =>
  http.get(`music/${info.image}/${info.genre}`);

const savePlayList = (list: PlayListInfo) => http.post(`save/`, list);

const MainServices = {
  getPlayList,
  savePlayList,
};

export default MainServices;
