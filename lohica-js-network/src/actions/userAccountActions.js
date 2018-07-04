import { accountRoute } from '../routes'
import { signOutAction } from './loginActions';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_USER_DATA = 'SET_USER_DATA';


export function setUserId (id) {
    return {
        type: SET_USER_ID,
        payload: id
    }
}

export function setUserData(data){
    return {
        type: SET_USER_DATA,
        payload: data
    }
}

export function fetchUserData(token) {
    return function(dispatch){
        return fetch(accountRoute, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            if (res.status === 400 || res.status === 403){
                return dispatch(signOutAction());
            } else {
                return res.json();
            }
        })
        .then(res => {
            if(res.userData){
                const { _id, name, age, email, midName, surname, gender, photoLink } = res.userData;
                dispatch(setUserId(_id));
                dispatch(setUserData({
                    name, age, email, gender, midName, surname, photoLink
                }));
            }
        })
    }
}
