import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegForm';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {  
      response: ''
    };
  }
  

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({ response: res.serverMessage }))
      .catch(err => console.log(err))
  }

  // use promise to fetch data from the server
  callApi = async () => {
    // fetch the proxy from package json - proxy is the link to the server
    let response = await fetch('/first-task');
    // has to be json because was sent as str
    let body = await response.json(); 

    if(response.status !== 200) throw new Error(body.message);
    
    return body;
  }

  render() {
    return (
        <div className="App"> 
            <h3>{ this.state.response }</h3> 
            <RegistrationForm store={this.props.store} />
        </div>
    );
  }
}

export default App;
