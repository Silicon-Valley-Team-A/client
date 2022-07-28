import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const name = 'UserSlice';

type UserState = {
  userId: string;
};

const initialState: UserState = {
  userId: '',
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setUserId: (state, action: any) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;

export default userSlice.reducer;
