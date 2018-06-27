import React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    class NotRequireAuthComponent extends React.Component {
        componentWillMount(){
            if(this.props.isAuth){
               this.props.history.push('/');
            }
        }

        componentWillUpdate(nextProps){
            if(nextProps.isAuth){
                this.props.history.push('/');
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
    
    return connect(mapStateToProps)(NotRequireAuthComponent);
}


