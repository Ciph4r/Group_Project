import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user_id: null,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload.token;
      state.user_id = payload.user_id
    },
    // setUser_id: (state, { payload }) => {
    //   state.user_Id = payload.token;
    // },
    logout: (state, { payload }) => {
      state.token = null;
    },
  },
});

export const { setToken, logout } = userSlice.actions;
