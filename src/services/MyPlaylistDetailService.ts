import http from '../common/http';

const getMyPlaylistDetail = (music_id: number) =>
  http.get(`http://localhost:4001/playlist`);

const getMyPlaylist = (user_id: number) =>
  http.get(`http://localhost:8888/myplaylist`);

const MyPlaylistDetailService = {
  getMyPlaylistDetail,
  getMyPlaylist,
};

export default MyPlaylistDetailService;
