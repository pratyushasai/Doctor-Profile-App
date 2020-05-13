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
		onClickHandle:()=>dispatch({type: constants.ADD_AVAILABILITY,
        payload: true})
	}
}





class ScheduleComponent extends Component{


	render(){
		let officeTimings=[9,10,11,12,1,2,3]
		let rowObjectArray=officeTimings.map((i)=>{return {hour:i,
							doctorAvailability:this.props.Doctor.Timings.includes(i)?true:false,
							hygienistAvailability:this.props.Higenist.Timings.includes(i)?true:false,
							assistantAvailability:this.props.Assistant.Timings.includes(i)?true:false}})
		console.log(rowObjectArray,"rowObjectArray")
		return(
			<div className="scheduleComponentContainer">
			<Button  onClick={this.props.onClickHandle}  >ADD AVAILABILITY</Button>
			<Table responsive className="tableContainer">	
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
				{this.props.IsModalUp?<ModalComponent/>:null}		
			</div>
			)
	}
}
const renderRow=(hourAvailability)=>{
	return(
		<tr key={hourAvailability.hour}>
			<td>
				{hourAvailability.hour}
			</td>
			<td bgcolor={hourAvailability.doctorAvailability==true? "green":"blue"}>
			</td>
			<td bgcolor={hourAvailability.assistantAvailability==true? "green":"blue"}>
			</td>
			<td bgcolor={hourAvailability.hygienistAvailability==true? "green":"blue"}>
			</td>
		</tr>
		)
	}

	


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleComponent)

