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
    duration: 60,
    file: '',
    title_album: '',
    image_album: '',
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
      state.isAudioPlaying = true;
      state.isPause = false;
      state.progress = 0;
    },
    toggleAudio: state => {
      state.isPause = !state.isPause;
    },
    skipPrevSong: state => {
      if (state.currentSongIdx > 0) {
        state.currentSongIdx -= 1;
        state.progress = 0;
      }
    },
    skipNextSong: state => {
      if (state.currentSongIdx < state.playList.length - 1) {
        state.isPause = false;
        state.currentSongIdx += 1;
        state.progress = 0;
      }
    },
    adjustSongTime: (state, action: PayloadAction<number>) => {
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
