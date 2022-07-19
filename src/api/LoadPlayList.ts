import MainServices from '../services/MainServices';
import { PlayListInfo } from '../types/main';

export const LoadPlayList = async (info: FormData) => {
  try {
    const res = await MainServices.getPlayList(info);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const SavePlayList = async (list: PlayListInfo) => {
  try {
    const res = await MainServices.savePlayList(list);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
