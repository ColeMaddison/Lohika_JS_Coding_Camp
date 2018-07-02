import React from 'react';
import { connect } from 'react-redux';
import { loginRoute } from './handlers/routes';
import { checkTokenRoute } from '../../routes';
import { invalidToken, validateToken } from '../../actions/inputAction';
import { signOutAction, setUserId } from '../../actions/loginActions';

export default function (ComposedComponent) {
    class RequireAuthComponent extends React.Component {
        componentWillMount(){
            fetch(checkTokenRoute, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('tkn')}`
                }
            })
                .then(res => {
                    if(res.status === 200){
                        // if token valid and got 200 from server set token valid - ok to the store and return data from fetch promise
                        this.props.dispatch(validateToken());
                        return res.json();
                    } else {
                        // if token is invalid force signout 
                        this.props.dispatch(invalidToken());                        
                        this.props.dispatch(signOutAction());
                    }
                })
                .then(res => {
                    // get user id from db and write it to store, do like that because in the first then res.json is a resolved promise, not an object
                    if(res){
                        this.props.dispatch(setUserId(res.decoded.sub));
                    }
                })
                .then(res => {
                    return res;
                });
                

            if(!this.props.isAuth && !this.props.tokenValid){
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
        return { 
            isAuth: initState.formInput.isAuthenticated,
            tokenValid: initState.formInput.tokenInfo.valid,
            store: initState,
            userId: initState.formInput.userId
        }
    }

    return connect(mapStateToProps)(RequireAuthComponent);
}


