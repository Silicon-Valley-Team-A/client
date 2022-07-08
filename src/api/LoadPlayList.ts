import MainServices from '../services/MainServices';
import { MusicInfo, ImageGenre } from '../types/main';

export const LoadPlayList = async (info: ImageGenre) => {
  try {
    const res = await MainServices.getPlayList(info);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const SavePlayList = async (list: MusicInfo[]) => {
  try {
    const res = await MainServices.savePlayList(list);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
