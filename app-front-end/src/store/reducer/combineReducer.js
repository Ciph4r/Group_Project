import {userSlice} from './userReducer'
import {combineReducers} from 'redux'
import {carSlice} from './carReducer'
import {inboxReducer} from './InboxReducer'

<<<<<<< HEAD
export const allReducers = combineReducers({user: userReducer , car: carSlice.reducer, inbox: inboxReducer})
=======
export const allReducers = combineReducers({user: userSlice.reducer , car: carReducer, inbox: inboxReducer})
>>>>>>> 9158afd18baff4ff3b314950843c9ce37b39117e



