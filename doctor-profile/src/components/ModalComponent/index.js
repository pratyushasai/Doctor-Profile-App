import React, { Component } from 'react';
// import Modal from 'react-modal';
import {DropdownButton, Modal, Button} from 'react-bootstrap'

class ModalComponent extends Component{
	render(){
		return (
			<div className="modalComponentContainer">
			<Modal.Dialog>
				<Modal.Header closeButton>
    				<Modal.Title>Add Availability</Modal.Title>
  				</Modal.Header>
  				<Modal.Body>
  					<p>Select a column</p>
  					<DropdownButton id="dropdown-variants-secondary" title="Select">
        			</DropdownButton>{' '}
        			<p>Select a start time</p>
        			<input type="time"/>
        			<p>Select a end time</p>
        			<input type="time"/>
  				</Modal.Body>
  				<Modal.Footer>
    				<Button variant="secondary">Close</Button>
    				<Button variant="primary">Save changes</Button>
  				</Modal.Footer>
			</Modal.Dialog>
			</div>
			)
	}
}

export default ModalComponent;