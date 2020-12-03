import {createSlice} from '@reduxjs/toolkit';

import{fetchCars,createCar,updateCar} from '../actions/cars'


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
      const cars = [...state.cars]
      cars.push(action.payload)
      state.cars = cars;

    },
    // [createCar.rejected]: (state, action) => {
    //   // state = action.payload;
    // },
    [updateCar.fulfilled]: (state, action) => {
      const cars = [...state.cars].map((car) => {
        if(car._id === action.payload._id){
          car = action.payload
        }
        return car
      })
      console.log(action.payload)
      state.cars = cars
      console.log(state.cars)
    },
  },
});

