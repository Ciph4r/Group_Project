import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk(
  'fetchFavorites',
  async (car, thunkAPI) => {
    const token = thunkAPI.getState().user.token;
    const fetchUrl = `${process.env.REACT_APP_API_URL}/users/fetch-favorites`;
    const response = await fetch(fetchUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let jsonData = await response.json();
    return jsonData;
  }
);
