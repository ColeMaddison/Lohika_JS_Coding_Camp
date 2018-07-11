import { accountRoute } from '../routes';
import { putRequestWithTokenNoContentType } from '../components/commonHandlers/requestGenerator'

export const ENABLE_MODIFY_USER_DATA = 'ENABLE_MODIFY_USER_DATA';
export const DISABLE_MODIFY_USER_DATA = 'DISABLE_MODIFY_USER_DATA';

export const SET_USER_DATA_NAME = 'SET_USER_DATA_NAME';
export const SET_USER_DATA_SURNAME = 'SET_USER_DATA_SURNAME';
export const SET_USER_DATA_MIDNAME = 'SET_USER_DATA_MIDNAME';
export const SET_USER_DATA_EMAIL = 'SET_USER_DATA_EMAIL';
export const SET_USER_DATA_AGE = 'SET_USER_DATA_AGE';
export const SET_USER_DATA_GENDER = 'SET_USER_DATA_GENDER';
export const SET_USER_DATA_IMAGE = 'SET_USER_DATA_IMAGE';
export const SET_USER_DATA_IMAGE_AS_OBJECT = 'SET_USER_DATA_IMAGE_AS_OBJECT';

export const SET_VALID_FIELDS = 'SET_VALID_FIELDS';
export const MODIFY_USER_DATA = 'MODIFY_USER_DATA';

export function enableModifyUserData () {
    return {
        type: ENABLE_MODIFY_USER_DATA
    }
}

export function disableModifyUserData () {
    return {
        type: DISABLE_MODIFY_USER_DATA
    }
}

export function setUserDataName(data) {
    return {
        type: SET_USER_DATA_NAME,
        payload: data
    }
}

export function setUserDataSurname(data) {
    return {
        type: SET_USER_DATA_SURNAME,
        payload: data
    }
}

export function setUserDataMidname(data) {
    return {
        type: SET_USER_DATA_MIDNAME,
        payload: data
    }
}

export function setUserDataEmail(data) {
    return {
        type: SET_USER_DATA_EMAIL,
        payload: data
    }
}

export function setUserDataAge(data) {
    return {
        type: SET_USER_DATA_AGE,
        payload: data
    }
}

export function setUserDataGender(data) {
    return {
        type: SET_USER_DATA_GENDER,
        payload: data
    }
}

export function setUserDataImage(data) {
    return {
        type: SET_USER_DATA_IMAGE,
        payload: data
    }
}

export function setUserDataImageAsObject(data) {
    return {
        type: SET_USER_DATA_IMAGE_AS_OBJECT,
        payload: data
    }
}

export function setValidFields() {
    return {
        type: SET_VALID_FIELDS
    }
}

export function modifyUserData(modifyData){
    const token = localStorage.getItem('tkn');

    return function(dispatch){
        return fetch(
            accountRoute, 
            putRequestWithTokenNoContentType(token, modifyData)
            )
            .then(res => res.json())
            .then(res => {
                dispatch(disableModifyUserData())
            });
    }
}