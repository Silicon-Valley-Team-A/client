import MainServices from '../services/MainServices';
import { MusicInfo } from '../types/main';

export const LoadPlayList = async (imageFile: File) => {
  try {
    const res = await MainServices.getPlayList(imageFile);
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
