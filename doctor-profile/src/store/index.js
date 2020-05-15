import appReducer from './reducers'
import { createStore } from 'redux'
import constants from './../constants'

//creating store for the application by passing reducer
const store=createStore(appReducer)

export default store;