import {createAsyncThunk} from '@reduxjs/toolkit';



export const fetchCars = createAsyncThunk(
    'fetchCars',
    async (args, thunkAPI) => {
  
        const fetchUrl = `${process.env.REACT_APP_API_URL}/api/cars/`;
        const response = await fetch(fetchUrl);
        let cars = await response.json();
        return cars;
  
    }
  );

  export const createCar = createAsyncThunk(
    'createCar',
    async (car, thunkAPI) => {
        const token = thunkAPI.getState().user.token;
        const createUrl = `${process.env.REACT_APP_API_URL}/api/cars/create`;
        console.log(car)
        const response = await fetch(createUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            body: JSON.stringify(car),
      });
      let jsonData = await response.json();
        console.log(jsonData)
    }
  );
  
    
