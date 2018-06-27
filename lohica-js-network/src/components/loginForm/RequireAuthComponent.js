import React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    class RequireAuthComponent extends React.Component {
        componentWillMount(){
            if(!this.props.isAuth){
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.isAuth){
                this.props.history.push('/login');
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


