import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import RegistrationForm from './RegForm';
import LoginForm from './loginForm/LoginForm';
import HomeComponent from './HomeComponents/HomeComponent'
import LogoutComponent from './loginForm/LogoutComponent';
import RequireAuthComponent from './loginForm/RequireAuthComponent';
import NotRequireAuthComponent from './loginForm/NotRequireAuthComponent';

class Main extends React.Component{
    constructor(props){
        super(props);

        // secure all the routes here, because using function calls in render method will cause the whole app to rerender and lose state + input focus
        this.LoginCompCall = NotRequireAuthComponent(LoginForm);
        this.HomeCompCall = RequireAuthComponent(HomeComponent);
        this.RegCompCall = NotRequireAuthComponent(RegistrationForm);
    }
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={this.HomeCompCall}/>
                    <Route path='/login' component={this.LoginCompCall} />
                    <Route path='/signup' component={this.RegCompCall}/>
                    <Route path='/logout' component={LogoutComponent}/>
                </Switch>
            </main>
        )
    }
}

const mapStateToProps = (initState) => {
    return{
        store: initState
    }
}

export default withRouter(connect(mapStateToProps)(Main));
