import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import{fetchCars,createCar} from '../actions/cars'


// export const fetchCars = createAsyncThunk(
//   'fetchCars',
//   async (args, thunkAPI) => {

//       const fetchUrl = 'http://localhost:4000/api/cars/';
//       const response = await fetch(fetchUrl);
//       let cars = await response.json();
//       return cars;

//   }
// );

export const updateCar = createAsyncThunk(
  'updateCar',
  async (args, thunkAPI) => {

    const fetchUrl = 'http://localhost:4000/api/cars/update';
    const response = await fetch(fetchUrl, {
    });
    let car = await response.json();
    return car;
  }
);

// export const createCar = createAsyncThunk(
//   'createCar',
//   async (args, thunkAPI) => {
//     const fetchUrl = 'http://localhost:4000/api/cars/create';
//     const response = await fetch(fetchUrl, {
//     });
//     let car = await response.json();
//     return car;
//   }
// );



export const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars:[],
    errors:{
      message:''
    }
  }
  ,

  reducers: {

  },

  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
    state.cars = action.payload.cars;
    },
    [createCar.fulfilled]: (state, action) => {
      // state.cars = action.payload.car;
    },
    // [createCar.rejected]: (state, action) => {
    //   // state = action.payload;
    // },
    [updateCar.fulfilled]: (state, action) => {
      state = action.payload;
    },
  },
});