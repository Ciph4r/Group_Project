import {createSlice} from '@reduxjs/toolkit';
import{fetchInbox , sendMsg ,changetoRead} from '../actions/inbox'


export const inboxSlice = createSlice({
  name: 'inbox',
  initialState: {
    inbox:[],
  }
  ,

  reducers: {
    // inboxReducer: (state , action) => {
    //     if(action.type === 'changetoRead'){
    //         return state.map(item => {
    //             if (item.id === action.payload){
    //                 item.read = true
    //             }
    //             return item;
    //         })
    //       }
    //   return state
    // },

  },

  extraReducers: {
    [fetchInbox.fulfilled]: (state, action) => {
    state.inbox = action.payload;
    },
    [sendMsg.fulfilled]: (state, action) => {
      console.log(action.payload)
      let index = 0
      for (let i = 0 ; i < state.inbox.inboxItems.length ; i++ ){
        if (state.inbox.inboxItems.[i]._id === action.payload._id){
          index = i
        }
      }

      state.inbox.inboxItems[index] = action.payload
      // state.inbox.inboxItems
      // inbox.inboxItems = action.payload
      // // console.log(state)
      // state.inbox = 
      // console.log(inbox)
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


    
  