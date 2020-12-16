import {createAsyncThunk} from '@reduxjs/toolkit';


export const fetchCars = createAsyncThunk(
    'fetchCars',
    async (args, thunkAPI) => {
        const {searchTerm, filterPrice, filterSize} = thunkAPI.getState().car
        const fetchUrl = `${process.env.REACT_APP_API_URL}/api/cars/?name=${searchTerm}&size=${filterSize}&priceLT=${filterPrice.priceLT}&priceGT=${filterPrice.priceGT}`;
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
                Authorization: `Bearer ${token}`,
              },
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
        const response = await fetch(createUrl, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
              },
            body: car.formData,
      });
      let jsonData = await response.json();
        return jsonData.car
    }
  );

  // export const bookCar = createAsyncThunk(
  //   'bookCar',
  //   async (args, thunkAPI) => {
  //       const token = thunkAPI.getState().user.token;
  //       const createUrl = `${process.env.REACT_APP_API_URL}/api/cars/bookCar/${args._id}`;
  //       const response = await fetch(createUrl, {
  //           method: 'POST',
  //           headers: {
  //               'Content-Type': 'application/json',
  //               Authorization: `Bearer ${token}`,
  //             },
  //             body: JSON.stringify({bookingDate : args.date})
              
  //     });
  //       let jsonData = await response.json();
  //       return jsonData
  //   }
  // );
  
    
