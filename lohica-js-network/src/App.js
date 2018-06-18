import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegForm';



class App extends Component {

  render() {
    return (
        <div className="App"> 
            <h3>Registration</h3> 
            <RegistrationForm store={this.props.store} />
        </div>
    );
  }
}

export default App;
