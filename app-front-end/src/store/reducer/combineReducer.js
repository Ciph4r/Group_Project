import {userSlice} from './userReducer'
import {combineReducers} from 'redux'
import {carSlice} from './carReducer'
import {inboxReducer} from './InboxReducer'


export const allReducers = combineReducers({user: userSlice.reducer , car: carSlice.reducer, inbox: inboxReducer})



