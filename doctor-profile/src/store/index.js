import appReducer from './reducers'
import { createStore } from 'redux'
import constants from './../constants'


const store=createStore(appReducer)

export default store;