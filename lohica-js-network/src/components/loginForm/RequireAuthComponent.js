import React from 'react';
import { connect } from 'react-redux';
import { loginRoute } from './handlers/routes';
import { checkTokenRoute } from '../../routes';
import { invalidToken, validateToken } from '../../actions/inputAction';
import { signOutAction } from '../../actions/loginActions';

export default function (ComposedComponent) {
    class RequireAuthComponent extends React.Component {
        componentWillMount(){
            console.log('here');
            fetch(checkTokenRoute, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('tkn')}`
                }
            })
                .then(res => {
                    console.log(res);
                    if(res.status === 200){
                        this.props.dispatch(validateToken());
                    } else {

                        this.props.dispatch(signOutAction());
                        this.props.dispatch(invalidToken());                        
                    }
                });

            if(!this.props.isAuth && !this.props.tokenValid){
                this.props.history.push(loginRoute);
            }
        }




        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! continue HERE




        componentWillUpdate(nextProps){
            // fetch(checkTokenRoute, {
            //     method: 'GET',
            //     headers: {
            //         'Authorization': `Bearer ${localStorage.getItem('tkn')}`
            //     }
            // })
            //     .then(res => {
            //         if(res.status === 200){
            //             this.props.dispatch(validateToken());
            //         } else {
            //             this.props.dispatch(signOutAction());
            //             this.props.dispatch(invalidToken());                        
            //         }
            //     });

            if(!nextProps.isAuth/* && !this.props.tokenValid*/){
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
        }
    }

    // const matchDispatchToProps = (dispatch) => {
    //     return {validateToken, invalidToken, dispatch}
    // }
    
    return connect(mapStateToProps)(RequireAuthComponent);
}


