import {createAsyncThunk} from '@reduxjs/toolkit';


export const fetchInbox = createAsyncThunk(
    'fetchInbox',
    async (args, thunkAPI) => {
        console.log(args)
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
        console.log(args)
        const token = thunkAPI.getState().user.token;
        const createUrl = `${process.env.REACT_APP_API_URL}/api/inbox/sendmsg/${args.id}`;
        console.log(createUrl)
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
        console.log(jsonData.msg)
    }
  );


export const changetoRead = (id) => {
    return {type: 'changetoRead' , payload:id};
    };