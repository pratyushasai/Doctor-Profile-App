import constants from "./../constants"
import { combineReducers } from 'redux'
import Availability from './../initialState.json';


export const reducer=(state=Availability,action)=>{
  const newState={...state}
  console.log(Availability,"initialState")
  switch (action.type) {
    case constants.TOGGLE_MODAL:
      newState.isModalUp=action.payload
      break;
    case constants.SAVE_DOCTOR_AVAILABILITY:
      newState.Doctor.Timings=[...state.Doctor.Timings,...action.payload]
      newState.isModalUp=false
      break;
    case constants.SAVE_ASSISTANT_AVAILABILITY:
      newState.Assistant.Timings=[...state.Assistant.Timings,...action.payload]
      newState.isModalUp=false
      break;
    case constants.SAVE_HIGENIST_AVAILABILITY:
      newState.Higenist.Timings=[...state.Higenist.Timings,...action.payload]
      newState.isModalUp=false
      break;
    }
  return newState
}



export default combineReducers({
  reducer
})

