const initState = {
    regForm: {
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
        genderValidStat: false,
        imageValid: false,
        imageData: ''
    },
    // name: '',
    // surname: '',
    // midName: '',
    // email: '',
    // age: '', 
    // gender:'',
    // ageValid:'',
    // imageStatus: null,
    // nameValid: false,
    // nameValidMessage: null,
    // surnameValid: false,
    // surnameValidMessage: null,
    // midNameValid: false,
    // midNameValidMessage: null,
    // emailValid: false,
    // emailValidMessage: null,
    // genderValid: null,
    // genderValidStat: false,
    // imageValid: false,
    // imageData: ''
};

const inputValidate = (state=initState, action) => {
    switch(action.type){
        case 'VALIDATE_NAME':
            return  {
                regForm: {
                    ...state.regForm,
                    name: action.payload.value, 
                    nameValid: action.payload.status,
                    nameValidMessage: action.payload.message
                }
            };
        case 'VALIDATE_SURNAME':
            return  {
                regForm: {
                    ...state.regForm,
                    surname: action.payload.value, 
                    surnameValid: action.payload.status,
                    surnameValidMessage: action.payload.message
                }
            };
        case 'VALIDATE_MIDNAME':
            return  {
                regForm: {
                    ...state.regForm,
                    midName: action.payload.value, 
                    midNameValid: action.payload.status,
                    midNameValidMessage: action.payload.message
                }
            };
        case 'VALIDATE_EMAIL':
            return  {
                regForm: {
                    ...state.regForm,
                    email: action.payload.value, 
                    emailValid: action.payload.status,
                    emailValidMessage: action.payload.message
                }
            };

        case 'VALIDATE_GENDER':
            return {
                regForm: {
                    ...state.regForm,
                    gender: action.payload.value,
                    genderValid: action.payload.status,
                    genderValidStat: action.payload.stat
                }
            }

        case 'VALIDATE_AGE':
            return {
                regForm: {
                    ...state.regForm,
                    age: action.payload.value,
                    ageValid: action.payload.status
                }
            }
        case 'VALIDATE_IMAGE':
            return {
                regForm: {
                    ...state.regForm,
                    imageData: action.payload.imgData,
                    imageStatus: action.payload.status,
                    imageValid: action.payload.imageValid
                }
            }
        default:
            return state;
    }
}

export default inputValidate;