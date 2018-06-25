export const validateName = (value) => {
    return {
        type:"VALIDATE_NAME",
        payload: value
    }
};

export const validateSurname = (value) => {
    return {
        type:"VALIDATE_SURNAME",
        payload: value,
    }
};

export const validateEmail = (value) => {
    return {
        type:"VALIDATE_EMAIL",
        payload: value
    }
};

export const validateMidName = (value) => {
    return {
        type:"VALIDATE_MIDNAME",
        payload: value
    }
};

export const validateGender = (value) => {
    return {
        type:"VALIDATE_GENDER",
        payload: value
    }
};

export const validateAge = (value) => {
    return {
        type:"VALIDATE_AGE",
        payload: value
    }
}

export const validateImage = (value) => {
    return {
        type:"VALIDATE_IMAGE",
        payload: value
    }
}

export const validateForm = (value) => {
    return {
        type:"VALIDATE_FORM_INVALID",
        payload: value
    }
}

export const validateLoginEmail = (value) => {
    return {
        type: 'VALIDATE_LOGIN_EMAIL',
        payload: value
    }
}

export const setPassword = (value) => {
    return {
        type: 'SET_PASSWORD',
        payload: value
    }
}

export const successReg = (value) => {
    return {
        type: 'SUCCESS_REG',
        payload: value
    }
}

export const regValidHandle = (value) => {
    return {
        type: 'REG_VALID_HANDLE',
        payload: value
    }
}

export const regValidHideMes = (value) => {
        return {
            type: 'REG_VALID_REMOVE_ERRORMES',
            payload: value
        }
}

export const regValidShowMes = (value) => {
    return {
        type: 'REG_VALID_SHOW_ERRORMES',
        payload: value
    }
}
