import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RegistrationForm from './RegForm';
import LoginForm from './loginForm/LoginForm';
import HomeComponent from './HomeComponents/HomeComponent'
import PrivateRoute from './PrivateRoute'

class Main extends React.Component{
    render(){
        return (
            <main>
                <Switch>
                    <PrivateRoute exact path='/' component={HomeComponent}/>
                    <Route path='/signup' component={RegistrationForm}/>
                    <Route path='/login' component={LoginForm} />
                </Switch>
            </main>
        )
    }
}
export default Main;