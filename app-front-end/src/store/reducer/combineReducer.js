import {userReducer} from './userReducer'
import {combineReducers} from 'redux'
import {carReducer} from './carReducer'


export const allReducers = combineReducers({user: userReducer , car: carReducer})



