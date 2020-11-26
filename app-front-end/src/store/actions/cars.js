import {createAsyncThunk} from '@reduxjs/toolkit';



export const fetchCars = createAsyncThunk(
    'fetchCars',
    async (args, thunkAPI) => {
  
        const fetchUrl = 'http://localhost:4000/api/cars/';
        const response = await fetch(fetchUrl);
        let cars = await response.json();
        return cars;
  
    }
  );
  
    
