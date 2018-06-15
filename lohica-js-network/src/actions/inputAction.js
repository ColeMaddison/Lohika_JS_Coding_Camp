export const validateName = (value) => {
    // console.log(value);
    return {
        type:"VALIDATE_NAME",
        payload: value
    }
};

export const validateSurname = (value) => {
    // console.log(value);
    return {
        type:"VALIDATE_SURNAME",
        payload: value,
    }
};

export const validateEmail = (value) => {
    // console.log(value);
    return {
        type:"VALIDATE_EMAIL",
        payload: value
    }
};

export const validateMidName = (value) => {
    // console.log(value);
    return {
        type:"VALIDATE_MIDNAME",
        payload: value
    }
};