import {tempReducer} from './tempReducer'
import {combineReducers} from 'redux'
import {tempReducer2} from './anotherTempReducer'


export const allReducers = combineReducers({temp: tempReducer , anotherStateStorage: tempReducer2})

