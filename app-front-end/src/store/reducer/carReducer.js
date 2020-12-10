import { createSlice } from '@reduxjs/toolkit';

import { fetchCars, createCar, updateCar } from '../actions/cars';

export const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    errors: {
      message: '',
    },
    searchTerm: '',
    filterSize: '',
    filterPrice: { priceLT: '', priceGT: '' },
  },

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilterSize: (state, action) => {
      state.filterSize = action.payload;
    },
    setFilterPrice: (state, action) => {
      state.filterPrice = action.payload;
    },
  },

  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload.cars;
    },
    [createCar.fulfilled]: (state, action) => {
      const cars = [...state.cars];
      cars.push(action.payload);
      state.cars = cars;
    },
    // [createCar.rejected]: (state, action) => {
    //   // state = action.payload;
    // },
    [updateCar.fulfilled]: (state, action) => {
      const cars = [...state.cars].map(car => {
        if (car._id === action.payload._id) {
          car = action.payload;
        }
        return car;
      });
      state.cars = cars;
    },
  },
});

export const {
  setSearchTerm,
  setFilterSize,
  setFilterPrice,
} = carSlice.actions;
