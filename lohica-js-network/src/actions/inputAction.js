export const VALIDATE_NAME = 'VALIDATE_NAME';
export const VALIDATE_SURNAME = 'VALIDATE_SURNAME';
export const VALIDATE_EMAIL = 'VALIDATE_EMAIL';
export const VALIDATE_MIDNAME = 'VALIDATE_MIDNAME';
export const VALIDATE_GENDER = 'VALIDATE_GENDER';
export const VALIDATE_AGE = 'VALIDATE_AGE';
export const VALIDATE_IMAGE = 'VALIDATE_IMAGE';
export const VALIDATE_FORM_INVALID = 'VALIDATE_FORM_INVALID';
export const VALIDATE_LOGIN_EMAIL = 'VALIDATE_LOGIN_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SUCCESS_REG = 'SUCCESS_REG';
export const REG_VALID_HANDLE = 'REG_VALID_HANDLE';
export const REG_VALID_REMOVE_ERRORMES = 'REG_VALID_REMOVE_ERRORMES';
export const REG_VALID_SHOW_ERRORMES = 'REG_VALID_SHOW_ERRORMES';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';


export const validateName = (value) => {
    return {
        type: VALIDATE_NAME,
        payload: value
    }
};

export const validateSurname = (value) => {
    return {
        type:VALIDATE_SURNAME,
        payload: value,
    }
};

export const validateEmail = (value) => {
    return {
        type:VALIDATE_EMAIL,
        payload: value
    }
};

export const validateMidName = (value) => {
    return {
        type:VALIDATE_MIDNAME,
        payload: value
    }
};

export const validateGender = (value) => {
    return {
        type:VALIDATE_GENDER,
        payload: value
    }
};

export const validateAge = (value) => {
    return {
        type:VALIDATE_AGE,
        payload: value
    }
}

export const validateImage = (value) => {
    return {
        type:VALIDATE_IMAGE,
        payload: value
    }
}

export const validateForm = (value) => {
    return {
        type:VALIDATE_FORM_INVALID,
        payload: value
    }
}

export const validateLoginEmail = (value) => {
    return {
        type: VALIDATE_LOGIN_EMAIL,
        payload: value
    }
}

export const setPassword = (value) => {
    return {
        type: SET_PASSWORD,
        payload: value
    }
}

export const successReg = (value) => {
    return {
        type: SUCCESS_REG,
        payload: value
    }
}

export const regValidHandle = (value) => {
    return {
        type: REG_VALID_HANDLE,
        payload: value
    }
}

export const regValidHideMes = (value) => {
        return {
            type: REG_VALID_REMOVE_ERRORMES,
            payload: value
        }
}

export const regValidShowMes = (value) => {
    return {
        type: REG_VALID_SHOW_ERRORMES,
        payload: value
    }
}

export const logInSuccess = () => {
    return {
        type: LOG_IN_SUCCESS
    }
}