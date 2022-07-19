import http from '../common/http';
import { PlayListInfo } from '../types/main';

const getPlayList = (info: FormData) => http.post(`music`, info);

const savePlayList = (list: PlayListInfo) => http.post(`save`, list);

const MainServices = {
  getPlayList,
  savePlayList,
};

export default MainServices;
