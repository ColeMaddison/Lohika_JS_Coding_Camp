import React from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: false  ,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 10) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 10) // fake async
    }
  }

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true ? <Component {...props} /> : <Redirect to='/login' />
    )} />
)

export default PrivateRoute;