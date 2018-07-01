import axios from 'axios';
import { loginRoute, indexRoute } from '../components/loginForm/handlers/routes';

export const AUTHENTICATED = 'AUTHENTICATED_USER';
export const UNAUTHENTICATED = 'UNAUTHENTICATED_USER';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';


export function signInAction({ email, password }, history) {
    return async (dispatch) => {
        await axios.post(loginRoute, { 
            email, password 
        }).then( res => {
            dispatch({ type: AUTHENTICATED });
            localStorage.setItem('tkn', res.data.userToken);
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
