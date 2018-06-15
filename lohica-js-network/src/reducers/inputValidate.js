const initState = {
    name: '',
    surname: '',
    midName: '',
    email: '',
    age: '', 
    gender:'',
    ageValid:'',
    nameValid: null,
    surnameValid: null,
    midNameValid: null,
    emailValid: null,
    genderValid: null
};

const inputValidate = (state=initState, action) => {
    switch(action.type){
        case 'VALIDATE_NAME':
            return  {
                ...state, 
                name: action.payload.value, 
                nameValid: action.payload.status
            };
        case 'VALIDATE_SURNAME':
            return  {
                ...state, 
                surname: action.payload.value, 
                surnameValid: action.payload.status
            };
        case 'VALIDATE_MIDNAME':
            return  {
                ...state, 
                midName: action.payload.value, 
                midNameValid: action.payload.status
            };
        case 'VALIDATE_EMAIL':
            return  {
                ...state, 
                email: action.payload.value, 
                emailValid: action.payload.status
            };

        case 'VALIDATE_GENDER':
            return {
                ...state,
                gender: action.payload.value,
                genderValid: action.payload.status
            }

        case 'VALIDATE_AGE':
            return {
                ...state,
                age: action.payload.value,
                ageValid: action.payload.status
            }
        default:
            return state;
    }
}

export default inputValidate;