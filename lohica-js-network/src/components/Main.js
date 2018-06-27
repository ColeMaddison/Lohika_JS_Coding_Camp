import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import RegistrationForm from './RegForm';
import LoginForm from './loginForm/LoginForm';
import HomeComponent from './HomeComponents/HomeComponent'
import PrivateRoute from './PrivateRoute';
import LogoutComponent from './loginForm/LogoutComponent';
import RequireAuthComponent from './loginForm/RequireAuthComponent';
import NotRequireAuthComponent from './loginForm/NotRequireAuthComponent';

class Main extends React.Component{
    render(){
        return (
            <main>
                <Switch>
                    <PrivateRoute exact path='/' component={RequireAuthComponent(HomeComponent)}/>
                    <Route path='/login' component={NotRequireAuthComponent(LoginForm)} />
                    <Route path='/signup' component={NotRequireAuthComponent(RegistrationForm)}/>
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
