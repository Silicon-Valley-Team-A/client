import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
