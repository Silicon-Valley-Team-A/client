import MyPlaylistDetailService from '../services/MyPlaylistDetailService';
import { userId } from '../types/playlist';

export const LoadMyPlayListDetail = async (playlist_id: string) => {
  try {
    const res = await MyPlaylistDetailService.getMyPlaylistDetail(playlist_id);
    console.log(res);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const LoadMyPlayList = async (user_id: userId) => {
  try {
    const res = await MyPlaylistDetailService.getMyPlaylist(user_id);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
