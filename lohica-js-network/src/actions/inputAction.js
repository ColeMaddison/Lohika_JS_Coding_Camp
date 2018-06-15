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
    // console.log(value);
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