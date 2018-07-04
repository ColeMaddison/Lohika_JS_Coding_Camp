import axios from 'axios';
import { loginRoute, indexRoute } from '../components/loginForm/handlers/routes';

export const AUTHENTICATED = 'AUTHENTICATED_USER';
export const UNAUTHENTICATED = 'UNAUTHENTICATED_USER';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const LOGIN_SUCCESS = 'LOG_IN_SUCCESS';



export function signInAction({ email, password }, history) {
    return async (dispatch) => {
        await axios.post(loginRoute, { 
            email, password 
        }).then( res => {
            localStorage.setItem('tkn', res.data.userToken);
            dispatch({ type: AUTHENTICATED });
            history.push(indexRoute);
        })
        .catch(error => {
            if(error.response){
                dispatch({
                    type: AUTHENTICATION_ERROR,
                    payload: error.response.data.message
                });
            }
        });
    }
}

export function signOutAction(){
    localStorage.removeItem('tkn');
    return {
        type: UNAUTHENTICATED
    }
}
