import React, { Component } from 'react';
import './styles.scss'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import Select from './dropdown';

let roleOptions = ['Doctor','Assistant', 'Hygienist'];
let officeTimings = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

class ModalComponent extends Component{
  constructor(props){
    super(props);
    this.props = props;
    //using refs to extract data from dom elements
    this.selectPerson=React.createRef();
    this.startTime=React.createRef();
    this.endTime=React.createRef();

    let timings = this.props.timings;   
    let doctor_timings = timings.Doctor.Timings;
    let hygienist_timings = timings.Higenist.Timings;
    let assistant_timings = timings.Assistant.Timings; 

    let dict = {
      "Doctor" : doctor_timings,
      "Hygienist" : hygienist_timings,
      "Assistant" : assistant_timings
    }

    this.state={
      Role:"",
      selectedTimeForARole:dict,
      errors: {}
    };
  }

  onChangeRole(event){
    this.setState({
      Role : event.target.value
    })
  }


  handleValidation(startTime, endTime, role,timings_map){
    let isValid = true;
    let errors = {};

    //validations for empty fields
    if(role==""){
      isValid = false;
      errors["role"]  = "*Required"
    }

    if(startTime ==0){
      isValid = false;
      errors["start_time"]  = "*Required"
    }

    if(endTime==0){
      isValid = false;
      errors["end_time"]  = "*Required"
    }

    //validation for start time and end time and make sure start time and end time is valid
    if(startTime!=0 && endTime!=0){

      if(timings_map[startTime]>=timings_map[endTime]){
        isValid = false;
        errors["general"] = "Start time should be less than end time.";
      }else if(role in this.state.selectedTimeForARole && this.state.selectedTimeForARole[role].indexOf(startTime)!=-1){
        isValid = false;
        errors["general"] = "Please select unavaiable slots";
      }
    }

    this.setState({errors: errors});
    return isValid;
  }

  getKeyByValue(object, value) { 
    for (var prop in object) { 
        if (object.hasOwnProperty(prop)) { 
            if (object[prop] === value) 
            return prop; 
        } 
    } 
} 

  getData=(e)=>{
    e.preventDefault();
    //timings_map array helps to validate start time and end time
    let timings_map = { 8 : 1, 9 :2 , 10:3, 11:4, 12:5, 1:6, 2:7, 3:8, 4:9, 5:10}
    let startTime=parseInt(this.startTime.current.value);
    let endTime=parseInt(this.endTime.current.value);
    let role = this.state.Role;
    //validate and push errors
    if(this.handleValidation(startTime, endTime, role, timings_map)){
        for (let i=timings_map[startTime];i<timings_map[endTime];i++){
            this.state.selectedTimeForARole[role].push(parseInt(this.getKeyByValue(timings_map, i)));
        }

        this.props.handleSave(this.state.Role, this.state.selectedTimeForARole[role]);
    }else{
      return;
    }
  
  }
  render(){
    
    return (
      <Modal show={true}>
      <Modal.Header>
      <Modal.Title>Add Availability</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalContent">
      <div id="formContainer">
            <div>
            <span style={{color: "red"}}>{this.state.errors["general"]}</span>
            </div>
            <div>
              
              <p>Select a column <span className="error">{this.state.errors["role"]}</span></p>
              <Select name="role" selectedOption={this.state.Role}
      controlFunc={this.onChangeRole.bind(this)} placeholder="Role" options ={roleOptions} />
      
              
            </div>
            <div className="form-group"> 
              <p>Select a start time <span className="error">{this.state.errors["start_time"]}</span></p>
              <select className="form-select dropDown" ref={this.startTime}>
              <option value={0}>Select...</option>  
              {officeTimings.map((i)=><option value={i}>{(i.toString()).concat(" : 00")}</option>)}
              </select>
              
            </div>
            <div className="form-group">
              <p>Select an end time <span className="error">{this.state.errors["end_time"]}</span></p>
              <select className="form-select dropDown" ref={this.endTime}>
              <option value={0}>Select...</option>
              {officeTimings.map((i)=><option value={i}>{(i.toString()).concat(" : 00")}</option>)}
              </select>
            </div>
        </div>     
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
            <Button onClick={this.getData.bind(this)} variant="primary">Save changes</Button>
        </Modal.Footer>
    </Modal>
      )
  }
}

export default ModalComponent;