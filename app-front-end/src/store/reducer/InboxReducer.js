import {createSlice} from '@reduxjs/toolkit';
import{fetchInbox , sendMsg ,setToRead} from '../actions/inbox'


export const inboxSlice = createSlice({
  name: 'inbox',
  initialState: {
    inbox:{
      inboxItems:[]
    },
  }
  ,

  reducers: {

  },

  extraReducers: {
    [fetchInbox.fulfilled]: (state, action) => {
    state.inbox = action.payload;
    },
    [sendMsg.fulfilled]: (state, action) => {

      // find the index of the message._id
      let index = null
      for (let i = 0 ; i < state.inbox.inboxItems.length ; i++ ){
        if (state.inbox.inboxItems.[i]._id === action.payload._id){
          index = i
        }
      }
      // set state
      state.inbox.inboxItems[index] = action.payload
      },
      [setToRead.fulfilled]: (state, action) => {

        const {inbox_id , message_id} = action.payload

        console.log(inbox_id , message_id)
        let index = null
        for (let i = 0 ; i < state.inbox.inboxItems.length ; i++ ){
          if (state.inbox.inboxItems.[i]._id === message_id){
            index = i
          }
        }
        state.inbox.inboxItems[index].read[inbox_id] = true
        },
  },
});


  
//     export const inboxReducer = (state = initialstate , action) => {
//         if(action.type === 'changetoRead'){
//             return state.map(item => {
//                 if (item.id === action.payload){
//                     item.read = true
//                 }
//                 return item;
//             })
//           }
//       return state
//     }


    
  