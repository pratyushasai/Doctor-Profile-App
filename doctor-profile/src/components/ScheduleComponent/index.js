import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import './styles.scss'
import Availability from './../../initialState.json';
import {connect} from 'react-redux'
import constants from './../../constants'


const mapStateToProps=(state)=>{
	return {
		IsModalUp:state
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		IsModalUp:dispatch(constants.ADD_AVAILABILITY)
	}
}

class ScheduleComponent extends Component{
	constructor(props) {
    	super(props);
    	this.state ={ ...Availability,IsModalUp:false};
    	console.log(this.state,"check here")
  	}

	render(){
		return (
			<div className="scheduleComponentContainer">
			<Button variant="primary" className="btn-availability" >ADD AVAILABILITY</Button>{' '}
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
    				{this.state.Availability.hours.map(renderRow)}
    			</tbody>
    		</Table>
			</div>
			)
	}


	componentDidMount(){

	}

}

const renderRow=(hourAvailability)=>{
	var x=hourAvailability.doctorAvailability
	return(
		<tr key={hourAvailability.hour}>
			<td>
				{hourAvailability.hour}
			</td>
			<td bgcolor={hourAvailability.doctorAvailability=="true"? "green":"blue"}>
			</td>
			<td bgcolor={hourAvailability.assistantAvailability=="true"? "green":"blue"}>
			</td>
			<td bgcolor={hourAvailability.hygienistAvailability=="true"? "green":"blue"}>
			</td>
		</tr>
		)
}


export default connect(
  mapStateToProps
)(ScheduleComponent)

