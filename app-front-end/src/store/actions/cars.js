import {createAsyncThunk} from '@reduxjs/toolkit';
import { compressImageFile } from 'frontend-image-compress'


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
        const response = await fetch(createUrl, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              },
            // body: JSON.stringify(car.data,car.selectedDateFrom ,car.selectedDate),
            body: car.formData,
            
      });
      let jsonData = await response.json();
        return jsonData.car
    }
  );

  export const updateCar = createAsyncThunk(
    'updateCar',
    async (car, thunkAPI) => {
        const token = thunkAPI.getState().user.token;
        const createUrl = `${process.env.REACT_APP_API_URL}/api/cars/update`;
        console.log(car)
        const response = await fetch(createUrl, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
              },
            body: car.formData,
      });
      let jsonData = await response.json();
        return jsonData.car
        console.log(jsonData)
    }
  );
  
  
    
