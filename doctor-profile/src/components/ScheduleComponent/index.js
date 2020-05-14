import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import './styles.scss'
import {connect} from 'react-redux'
import constants from './../../constants'
import ModalComponent from './../ModalComponent'



const mapStateToProps=(state)=>{
	console.log(state.reducer,"state in mapStateToProps")
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


const mapDispatchToProps=(dispatch)=>{
	return{
		onClickHandle:()=>dispatch({type: constants.TOGGLE_MODAL,
        payload: true}),
        handleClose:()=>dispatch({type: constants.TOGGLE_MODAL,
        payload:false}),
        handleSave:()=>{
        	let x="Doctor"
        	switch (x){
        		case "Doctor":
        			dispatch({type:constants.SAVE_DOCTOR_AVAILABILITY,
        				payload:[2,3]})
        			break;
        		case  "Assistant":
        			dispatch({type:constants.SAVE_ASSISTANT_AVAILABILITY,
        				payload:[2,3]})
        			break;
        		case "Higenist":
        			dispatch({tupe:constants.SAVE_HIGENIST_AVAILABILITY,
        				payload:[2,3]})
        			break;
        	}

        }
	}
}






class ScheduleComponent extends Component{


	render(){
		let officeTimings=[9,10,11,12,1,2,3]
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
				{this.props.IsModalUp?<ModalComponent handleClose={this.props.handleClose} handleSave={this.props.handleSave}/>:null}		
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
				{(hourAvailability.hour.toString()).concat(": 00")}
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

