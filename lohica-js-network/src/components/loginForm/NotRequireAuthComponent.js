import React from 'react';
import { connect } from 'react-redux';
import { indexRoute } from './handlers/routes';

export default function (ComposedComponent) {
    class NotRequireAuthComponent extends React.Component {
        componentWillMount(){
            if(this.props.isAuth){
               this.props.history.push(indexRoute);
            }
        }

        componentWillUpdate(nextProps){
            if(nextProps.isAuth){
                this.props.history.push(indexRoute);
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


