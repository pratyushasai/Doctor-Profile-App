import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import './styles.scss'
import {connect} from 'react-redux'
import constants from './../../constants'
import ModalComponent from './../ModalComponent'


// considering the hard coded office hours
let officeTimings=[8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

//This function will map incoming state from store to props for the current component
const mapStateToProps=(state)=>{
	return {
		IsModalUp:state.reducer.isModalUp,
		Doctor:{
			Timings:state.reducer.Doctor.Timings
		},
		Assistant:{
			Timings:state.reducer.Assistant.Timings
		},
		Higenist:{
			Timings:state.reducer.Higenist.Timings
		}
	}
}


// This function dispatches required actions to the store
const mapDispatchToProps=(dispatch)=>{
	return{
		//action dispatched after "Add availability" button click and shows modal
		onClickHandle:()=>dispatch({type: constants.TOGGLE_MODAL,
        payload: true}),

        //action dispatched after clicking "close" in the modal
        handleClose:()=>dispatch({type: constants.TOGGLE_MODAL,
        payload:false}),

        //action dispatched for saving the details
        handleSave:(role, arr)=>{
        	switch (role){
        		case "Doctor":
        			dispatch({type:constants.SAVE_DOCTOR_AVAILABILITY,
        				payload:arr})
        			break;
        		case  "Assistant":
        			dispatch({type:constants.SAVE_ASSISTANT_AVAILABILITY,
        				payload:arr})
        			break;
        		case "Hygienist":
        			dispatch({type:constants.SAVE_HIGENIST_AVAILABILITY,
        				payload:arr})
        			break;
        	}

        }
	}
}






class ScheduleComponent extends Component{
	



	render(){

		//changing the format of the data to show it in a table row
		let rowObjectArray=officeTimings.map((i)=>{return {hour:i,
							doctorAvailability:this.props.Doctor.Timings.includes(i)?true:false,
							hygienistAvailability:this.props.Higenist.Timings.includes(i)?true:false,
							assistantAvailability:this.props.Assistant.Timings.includes(i)?true:false}})
		
		return(
			<div className="scheduleComponentContainer">
			<Button className="btn-availability"  onClick={this.props.onClickHandle}  >ADD AVAILABILITY</Button>
			<Table responsive>	
			<thead>
    				<tr>
      					<th>#</th>
      					<th>Doctor</th>
      					<th>Assistant</th>
      					<th>Hygienist</th>
    				</tr>
    			</thead>
    			<tbody>
    			    	{rowObjectArray.map(renderRow)}
    			</tbody>
			</Table>	
				{this.props.IsModalUp?<ModalComponent handleClose={this.props.handleClose} handleSave={this.props.handleSave} timings={this.props}/>:null}		
			</div>
			)
	}
}


const renderRow=(hourAvailability)=>{
	let greenColor="#c7f0ca"
	let greyColor="#f5f7f5"
	return(
		<tr key={hourAvailability.hour}>
			<td>
				{(hourAvailability.hour.toString()).concat(" : 00")}
			</td>
			<td bgcolor={hourAvailability.doctorAvailability==true? greenColor:greyColor}>
				{hourAvailability.doctorAvailability==true?"Available":""}
			</td>
			<td bgcolor={hourAvailability.assistantAvailability==true? greenColor:greyColor}>
			{hourAvailability.assistantAvailability==true?"Available":""}
			</td>
			<td bgcolor={hourAvailability.hygienistAvailability==true? greenColor:greyColor}>
			{hourAvailability.hygienistAvailability==true?"Available":""}
			</td>
		</tr>
		)
	}

	


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleComponent)

