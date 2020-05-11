import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import './styles.scss'
import dayProfile from './../../initialState.json'




class ScheduleComponent extends Component{
	render(){
		const availableTimes=[8,9,10,11,12,1,2,3]
		return (
			<div className="scheduleComponentContainer">
			<Button variant="primary" className="btn-availability">ADD AVAILABILITY</Button>{' '}
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
    				{availableTimes.map(renderRow)}
    			</tbody>
    		</Table>
			</div>
			)
	}


}

const renderRow=(i)=>{
	return(
		<tr key={i}>
			<td>{i}</td>
			<td id={"Doc"+i}></td>
			<td id={"Assistant"+i}></td>
			<tdid={"Hygienist"+i}></td>
		</tr>
		)
}

export default ScheduleComponent;
