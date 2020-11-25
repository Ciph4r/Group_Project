import {userSlice} from './userReducer'
import {combineReducers} from 'redux'
import {carReducer} from './carReducer'
import {inboxReducer} from './InboxReducer'

export const allReducers = combineReducers({user: userSlice.reducer , car: carReducer, inbox: inboxReducer})



