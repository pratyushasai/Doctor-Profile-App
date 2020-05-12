import constants from "./../constants"
import { combineReducers } from 'redux'

export const addAvailability = (state=false, action) => 
  (action.type === constants.ADD_AVAILABILITY) ?
  	action.payload :
  	state

 // export const closeModal = (state=true, action) => 
 //  (action.type === constants.CLOSE_MODAL) ?
 //  	action.payload :
 //  	state



 export default combineReducers({
  addAvailability
  // closeModal
})

