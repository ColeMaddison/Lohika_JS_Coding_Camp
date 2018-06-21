import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RegistrationForm from './RegForm';
import LoginForm from './loginForm/LoginForm';

class Main extends React.Component{
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={RegistrationForm}/>
                    <Route path='/login' component={LoginForm} />
                </Switch>
            </main>
        )
    }
}
export default Main;