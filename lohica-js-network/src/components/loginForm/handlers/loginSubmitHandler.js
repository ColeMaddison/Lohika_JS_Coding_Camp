import { loginRoute } from './routes';
import { postGener } from '../../commonHandlers/requestGenerator'

export let loginFormSubmit = (ev, emailValid, email, password, dispatch) => {
    if(emailValid && password){
        fetch(loginRoute, postGener({
                'email': email,
                'password': password
            })).then(mes => mes.json())
            .then(result => result.userToken ? localStorage.setItem('tkn', result.userToken) : localStorage.removeItem('tkn'))
            .then(result => {
                dispatch({type: 'LOG_IN_SUCCESS'})
                window.location.reload(true);
            })
    } else {
        localStorage.removeItem('tkn');
    }
}   
