import http from '../common/http';
import { userId } from '../types/playlist';

const getMyPlaylistDetail = (playlist_id: string) =>
  http.get(`playlist/${playlist_id}`, { withCredentials: true });

const getMyPlaylist = (user_id: userId) =>
  http.post(`playlist`, user_id, { withCredentials: true });

const MyPlaylistDetailService = {
  getMyPlaylistDetail,
  getMyPlaylist,
};

export default MyPlaylistDetailService;
