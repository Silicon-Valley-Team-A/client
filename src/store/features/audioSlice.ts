import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../../types/playlist';

const name = 'AudioSlice';

type AudioState = {
  isAudioPlaying: boolean;
  isPause: boolean;
  currentSong: Song;
  currentSongIdx: number;
  progress: number;
  playList: Song[];
};

const initialState: AudioState = {
  isAudioPlaying: false,
  isPause: false,
  currentSong: {
    id: '',
    title: '',
    artist: '',
    duration: 1,
    file: '',
    title_album: '',
    image_album: '',
    length: 0,
  },
  currentSongIdx: 0,
  progress: 0,
  playList: [],
};

export const audioSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setSongList: (state, action: PayloadAction<Song[]>) => {
      state.playList = action.payload;
      console.log(action.payload);
      state.isAudioPlaying = true;
    },
    toggleAudio: state => {
      console.log('toggle');
      state.isPause = !state.isPause;
    },
    skipPrevSong: state => {
      console.log('PrevSong');
      if (state.currentSongIdx > 0) state.currentSongIdx -= 1;
    },
    skipNextSong: state => {
      console.log('NextSong');
      if (state.currentSongIdx < state.playList.length - 1)
        state.currentSongIdx += 1;
    },
    adjustSongTime: (state, action: PayloadAction<number>) => {
      console.log('adjustProgress');
      state.progress = action.payload;
    },
  },
});

export const {
  setSongList,
  toggleAudio,
  skipPrevSong,
  skipNextSong,
  adjustSongTime,
} = audioSlice.actions;
export default audioSlice.reducer;
