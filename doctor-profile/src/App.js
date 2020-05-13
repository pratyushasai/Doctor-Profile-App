import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ScheduleComponent from './components/ScheduleComponent'
import ModalComponent from './components/ModalComponent'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
  	<Provider store={store}>
    <div className="App">
      <header>
       Dr.Profile
      </header>  
      	{console.log(store.getState(),"store")}
      	<ScheduleComponent/>
    </div>
    </Provider>
  );
}

export default App;
