import React from 'react';
import { connect } from 'react-redux';
import { loginRoute } from './handlers/routes';

export default function (ComposedComponent) {
    class RequireAuthComponent extends React.Component {
        componentWillMount(){
            if(!this.props.isAuth){
                this.props.history.push(loginRoute);
            }
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
        return { isAuth: initState.formInput.isAuthenticated }
    }
    
    return connect(mapStateToProps)(RequireAuthComponent);
}


