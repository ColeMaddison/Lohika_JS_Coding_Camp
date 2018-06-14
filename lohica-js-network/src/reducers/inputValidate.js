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
    console.log(action);
    switch(action.type){
        case 'VALIDATE_NAME':
            return action.payload;
        default:
            return state;
    }
}

export default inputValidate;