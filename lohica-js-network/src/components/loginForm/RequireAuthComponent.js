import React from 'react';
import { connect } from 'react-redux';
import { loginRoute } from './handlers/routes';
import { fetchUserData } from '../../actions/userAccountActions';

export default function (ComposedComponent) {
    class RequireAuthComponent extends React.Component {
        componentWillMount(){
            this.props.dispatch(fetchUserData(localStorage.getItem('tkn')));
        }

        componentWillUpdate(nextProps){
            if(!nextProps.isAuth){
                this.props.history.push(loginRoute);
            }
        }        
    
        render(){
            return(
                <ComposedComponent { ...this.props } />
            )
        }
    }

    const mapStateToProps = (initState) => {
        return { 
            isAuth: initState.formInput.isAuthenticated,
            store: initState,
            userId: initState.formInput.userId
        }
    }

    return connect(mapStateToProps)(RequireAuthComponent);
}


