import {createAsyncThunk} from '@reduxjs/toolkit';



export default {
        fetchCars: createAsyncThunk(
        'fetchCars',
        async (args, thunkAPI) => {
        //   const token = thunkAPI.getState().auth.token;
          const fetchUrl = 'http://localhost:4000/api/cars/';
          const response = await fetch(fetchUrl, {
            // headers: {
            //   'Content-Type': 'application/json',
            //   Authorization: `Bearer ${token}`,
            // },
          });
          let cars = await response.json();
          return cars;
        }
      );
    
}