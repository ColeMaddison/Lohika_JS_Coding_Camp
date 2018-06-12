import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    response: ''
  };
  

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({ response: res.serverMessage }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    let response = await fetch('/first-task');
    let body = await response.json(); // has to be json because was sent as str

    if(response.status !== 200) throw new Error(body.message);
    
    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
          <p>{ this.state.response }</p> 
      </div>
    );
  }
}

export default App;
