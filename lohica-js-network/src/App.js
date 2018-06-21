import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegForm';
import NavigationBar from './components/navBar/NavigationBar'
import FooterComponent from './components/footer/FooterComponent';

class App extends Component {

  render() {
    return (
        <div className="App">
          <NavigationBar />
            <FooterComponent />
          <RegistrationForm/>
        </div>
    );
  }
}

export default App;
