import MyPlaylistDetailService from '../services/MyPlaylistDetailService';

export const LoadMyPlayListDetail = async (music_id: number) => {
  try {
    const res = await MyPlaylistDetailService.getMyPlaylistDetail(music_id);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const LoadMyPlayList = async (user_id: number) => {
  try {
    const res = await MyPlaylistDetailService.getMyPlaylist(user_id);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
