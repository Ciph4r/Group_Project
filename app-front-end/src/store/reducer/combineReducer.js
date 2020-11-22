import {userReducer} from './userReducer'
import {combineReducers} from 'redux'
import {carReducer} from './carReducer'
import {inboxReducer} from './InboxReducer'

export const allReducers = combineReducers({user: userReducer , car: carReducer, inbox: inboxReducer})



