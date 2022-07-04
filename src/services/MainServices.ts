import http from '../common/http';

const getPlayList = (imageFile: File) =>
  http.get(`http://localhost:4000/playList/`);

const MainServices = {
  getPlayList,
};

export default MainServices;
