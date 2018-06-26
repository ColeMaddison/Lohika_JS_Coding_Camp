import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
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
                    <Route path='/login' component={LoginForm} />
                    <Route path='/signup' component={RegistrationForm}/>
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

// export default Main;