import MainServices from '../services/MainServices';

export const LoadPlayList = async (imageFile: File) => {
  try {
    const res = await MainServices.getPlayList(imageFile);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
