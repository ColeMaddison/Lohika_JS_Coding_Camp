import axios from 'axios';
import { loginRoute, indexRoute } from '../components/loginForm/handlers/routes';
import { postGener } from '../components/commonHandlers/requestGenerator';

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

// export function loginFormSubmit(ev, emailValid, email, password) {
//     if(emailValid && password){
//         return dispatch => {
//             return fetch(loginRoute, postGener({email, password}))
//                 .then(mes => mes.json())
//                 .then(result => result.userToken ? localStorage.setItem('tkn', result.userToken) : localStorage.removeItem('tkn'))
//                 .then(result => {
//                     dispatch({type: 'LOG_IN_SUCCESS'})
//                     window.location.reload(true);
//                 })
//         }
//     } else {
//         localStorage.removeItem('tkn');
//     }
// }
