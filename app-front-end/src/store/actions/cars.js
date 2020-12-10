import {createAsyncThunk} from '@reduxjs/toolkit';


export const fetchCars = createAsyncThunk(
    'fetchCars',
    async (args, thunkAPI) => {
        const {searchTerm, filterPrice, filterSize} = thunkAPI.getState().car
        const fetchUrl = `${process.env.REACT_APP_API_URL}/api/cars/?name=${searchTerm}&size=${filterSize}&priceLT=${filterPrice.priceLT}&priceGT=${filterPrice.priceGT}`;
        const response = await fetch(fetchUrl);
        let cars = await response.json();

        for(let i = 0 ; i < cars.cars.length ; i++){
          const dateList = cars.cars[i].dateList
          let dateLookUp ={}

          for (let j = 0 ; j < dateList.length ; j++){
            let listingdate = new Date(dateList[j].date)
            const dateKey = `${listingdate.getDate()}/${listingdate.getMonth()}/${listingdate.getFullYear()}`
            dateLookUp[dateKey] = dateList[j]
          }
          cars.cars[i] = {
            dateLookUp,...cars.cars[i]
            }
        }
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
        
    }
  );
  
  
    
