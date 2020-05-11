import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ScheduleComponent from './components/ScheduleComponent'
import ModalComponent from './components/ModalComponent'

function App() {
  return (
    <div className="App">
      <header>
       Dr.Profile
      </header>  
          <ScheduleComponent/>
    </div>
  );
}

export default App;
