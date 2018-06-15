const initState = {
    name: '',
    surname: '',
    midName: '',
    email: '',
    age: '', 
    gender:'',
    nameValid: null,
    surnameValid: null,
    midNameValid: null,
    emailValid: null
};

const inputValidate = (state=initState, action) => {
    // console.log(action);
    switch(action.type){
        case 'VALIDATE_NAME':
            return  Object.assign({}, state, {
                nameValid: action,
                name: action.payload.payload
            });
        case 'VALIDATE_SURNAME':
            return  Object.assign({}, state, {
                surnameValid: action.payload
            });
        case 'VALIDATE_MIDNAME':
            return  Object.assign({}, state, {
                midNameValid: action.payload
            });
        case 'VALIDATE_EMAIL':
            return  {...state, email: action.payload.value, emailValid: action.payload.status};
        default:
            return state;
    }
}

export default inputValidate;