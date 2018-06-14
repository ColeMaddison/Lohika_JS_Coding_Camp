export const validate = (value) => {
    console.log(value);
    return {
        type:"VALIDATE_NAME",
        payload: value
    }
};