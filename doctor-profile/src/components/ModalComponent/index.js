import React, { Component } from 'react';
import './styles.scss'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {DropdownButton,Dropdown, Button} from 'react-bootstrap'



class ModalComponent extends Component{
  constructor(props){
    super(props);
    this.selectPerson=React.createRef()
    this.startTime=React.createRef()
    this.endTime=React.createRef()

  }

  getData=()=>{
  let startTime=this.startTime.current.value
  let endTime=this.endTime.current.value
  let array=[]
  for (let i=startTime;i<endTime;i++){
      array.append(i)
  }
  console.log(this.selectPerson.current.value,array,startTime,endTime,"here")

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
            <select ref={this.selectPerson}>
            <option value="Doctor">Doctor</option>
            <option value="Assistant">Assistant</option>
            <option value="Hygienist">Hygienist</option>
            </select>

            <p>Select a start time</p>
            <select ref={this.startTime}>
            {officeTimings.map((i)=><option value={i}>{(i.toString()).concat(": 00")}</option>)}
            </select>

            <p>Select a end time</p>
            <select ref={this.endTime}>
            {officeTimings.map((i)=><option value={i}>{(i.toString()).concat(": 00")}</option>)}
            </select>
        </div>
           

            
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
            <Button onClick={this.getData} variant="primary">Save changes</Button>
        </Modal.Footer>
    </Modal>
      )
  }
}

export default ModalComponent;