import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchInbox = createAsyncThunk(
    'fetchInbox',
    async (args, thunkAPI) => {
        const token = thunkAPI.getState().user.token;
        const createUrl = `${process.env.REACT_APP_API_URL}/api/inbox/`;
        const response = await fetch(createUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
      });
      let jsonData = await response.json();
        return jsonData.inbox
    }
  );

  export const sendMsg = createAsyncThunk(
    'sendMsg',
    async (args, thunkAPI) => {
        const token = thunkAPI.getState().user.token;
        const createUrl = `${process.env.REACT_APP_API_URL}/api/inbox/sendmsg/${args.id}`;
        const response = await fetch(createUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({messageText:args.messageText})
              
      });
      let jsonData = await response.json();
        return jsonData.msg

    }
  );

  // set message to read
  export const setToRead = createAsyncThunk(
    'setToRead',
    async (args, thunkAPI) => {
        const token = thunkAPI.getState().user.token;
        const createUrl = `${process.env.REACT_APP_API_URL}/api/inbox//read/${args}`;
        const response = await fetch(createUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              // body: JSON.stringify({messageText:args.messageText})
              
      });
        let jsonData = await response.json();
        return jsonData.payload
        

    }
  );


// export const changetoRead = (id) => {
//     return {type: 'changetoRead' , payload:id};
//     };