import {tempReducer} from './tempReducer'
import {combineReducers} from 'redux'

export const allReducers = combineReducers({temp: tempReducer})

