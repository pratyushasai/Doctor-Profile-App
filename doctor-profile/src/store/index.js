import appReducer from './reducers'
import { createStore } from 'redux'
import constants from './../constants'

// export default (initialState={})=>createStore(appReducer)

const store=createStore(appReducer)
// console.log(store.getState(),"initialState")
// store.dispatch({
// 	type:constants.ADD_AVAILABILITY,
// 	payload:true
// })

// console.log(store.getState(),"finalState")

export default store;