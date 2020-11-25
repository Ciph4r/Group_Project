import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

// import{fetchCars} from '../actions/cars;'


export const fetchCars = createAsyncThunk(
  'fetchCars',
  async (args, thunkAPI) => {
    const fetchUrl = 'http://localhost:4000/api/cars/';
    const response = await fetch(fetchUrl);
    let cars = await response.json();
    console.log(cars)
    return cars;
  }
);

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

export const createCar = createAsyncThunk(
  'createCar',
  async (args, thunkAPI) => {
    const fetchUrl = 'http://localhost:4000/api/cars/create';
    const response = await fetch(fetchUrl, {
    });
    let car = await response.json();
    return car;
  }
);



export const carSlice = createSlice({
  name: 'cars',
  initialState: [
  //     {
  //   img:['https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
  //   'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg'
  // ],
  //   year: '2011',
  //   make: 'Dodge',
  //   model: 'Charger',
  //   price: 150,
  //   id:1
  // },
  // {
  //   img:['https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg'],
  //   year: '2011',
  //   make: 'Dodge',
  //   model: 'Charger',
  //   price: 150,
  //   id:2
  // },
  // {
  //   img:['https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg'],
  //   year: '2011',
  //   make: 'Dodge',
  //   model: 'Charger',
  //   price: 150,
  //   id:3
  // },
  // {
  //   img:['https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg'],
  //   year: '2011',
  //   make: 'Dodge',
  //   model: 'Charger',
  //   price: 150,
  //   id:4
  // },
  ],

  reducers: {

  },

  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
      state = action.payload;
    },
    [createCar.fulfilled]: (state, action) => {
      state = action.payload;
    },
    [createCar.rejected]: (state, action) => {
      // state = action.payload;
    },
    [updateCar.fulfilled]: (state, action) => {
      state = action.payload;
    },
  },
});