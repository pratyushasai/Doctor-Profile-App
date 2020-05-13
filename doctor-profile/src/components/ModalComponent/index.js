import React, { Component } from 'react';
import './styles.scss'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {DropdownButton,Dropdown, Button} from 'react-bootstrap'

class ModalComponent extends Component{
  constructor(props){
    super(props);

  }
  render(){
    let officeTimings=[9,10,11,12,1,2,3]
    return (
      <Modal show={true}>
      <Modal.Header>
      <Modal.Title>Add Availability</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div id="formContainer">
            <p>Select a column</p>
            <DropdownButton id="dropdown-basic-button" title="Select...">
              <Dropdown.Item href="#/action-1">Doctor</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Assistant</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Hygienist</Dropdown.Item>
            </DropdownButton>

            <p>Select a start time</p>
            <div className="startTime">
            <DropdownButton id="dropdown-basic-button" title="Hour">
            {officeTimings.map((i)=><Dropdown.Item >{i}</Dropdown.Item>)}
            </DropdownButton>
            </div>


            <p>Select a end time</p>
            <div className="endTime">
            <DropdownButton id="dropdown-basic-button" title="Hour">
            {officeTimings.map((i)=><Dropdown.Item >{i}</Dropdown.Item>)}
            </DropdownButton>
            </div> 
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
            <Button onClick={this.props.handleSave} variant="primary">Save changes</Button>
        </Modal.Footer>
    </Modal>
      )
  }
}

export default ModalComponent;