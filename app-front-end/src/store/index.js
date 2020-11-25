import {createStore , applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {allReducers} from './reducer/combineReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk';



export const store = createStore(allReducers , composeWithDevTools(applyMiddleware(logger,thunk)))           