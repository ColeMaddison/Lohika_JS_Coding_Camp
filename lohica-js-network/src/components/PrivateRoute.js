import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('tkn') ? <Component {...props} /> : <Redirect exact to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

export default PrivateRoute;