import React from 'react';
// import {connect} from 'react-redux';
import { /*BrowserRouter as Router,*/ Route, Redirect } from 'react-router-dom';

// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//       this.isAuthenticated = true
//       setTimeout(cb, 10) // fake async
//     },
//     signout(cb) {
//       this.isAuthenticated = false
//       setTimeout(cb, 10) // fake async
//     }
//   }


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('tkn') ? <Component {...props} /> : <Redirect exact to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

// const mapStateToProps = (initState) => {
//   console.log(initState.formInput.isAuthenticated);
//   return{
//       isLogged: initState.formInput.isAuthenticated
//   }
// }

// export default connect(mapStateToProps)(PrivateRoute);

export default PrivateRoute;