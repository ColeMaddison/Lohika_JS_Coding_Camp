import { userConstants } from '../../../constants/loginConstants';
import { userReqEmitter } from './userReqEmitter';
import { history } from './history';
import {} from '../../../actions/inputAction';

const login = (username, password) => {
    return dispatch => {
        dispatch(request({username}));

        userReqEmitter.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
        }
    let request = user => { type: userConstants.LOGIN_REQUEST, user }; 
    let success = user => { type: userConstants.LOGIN_SUCCESS, user }; 
    let failure = () => { type: userConstants.LOGIN_FAILURE, user }; 
}

const logout = () => {
    userReqEmitter.logout();
    return {type: userConstants.LOGOUT}
}

export const loginHandler = {
    login,
    logout
}

