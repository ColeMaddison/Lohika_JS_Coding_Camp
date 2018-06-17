const initState = {
    name: '',
    surname: '',
    midName: '',
    email: '',
    age: '', 
    gender:'',
    ageValid:'',
    imageStatus: null,
    nameValid: false,
    nameValidMessage: null,
    surnameValid: false,
    surnameValidMessage: null,
    midNameValid: false,
    midNameValidMessage: null,
    emailValid: false,
    emailValidMessage: null,
    genderValid: null,
    imageValid: false
};

const inputValidate = (state=initState, action) => {
    switch(action.type){
        case 'VALIDATE_NAME':
            return  {
                ...state, 
                name: action.payload.value, 
                nameValid: action.payload.status,
                nameValidMessage: action.payload.message
            };
        case 'VALIDATE_SURNAME':
            return  {
                ...state, 
                surname: action.payload.value, 
                surnameValid: action.payload.status,
                surnameValidMessage: action.payload.message
            };
        case 'VALIDATE_MIDNAME':
            return  {
                ...state, 
                midName: action.payload.value, 
                midNameValid: action.payload.status,
                midNameValidMessage: action.payload.message
            };
        case 'VALIDATE_EMAIL':
            return  {
                ...state, 
                email: action.payload.value, 
                emailValid: action.payload.status,
                emailValidMessage: action.payload.message
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
        case 'VALIDATE_IMAGE':
            return {
                ...state,
                imageStatus: action.payload.status,
                imageValid: action.payload.imageValid
            }
        default:
            return state;
    }
}

export default inputValidate;