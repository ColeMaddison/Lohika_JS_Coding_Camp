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
        imageData: '',
        regToLoginRedirect: {
            password: '',
            message: '',
            show: false,
            alertStyle: ''
        }
    },
    loginForm:{
        email: '',
        password: '',
        emailValid: false,
        emailValidMessage: null,
    }
};

const inputValidate = (state=initState, action) => {
    switch(action.type){
        case 'VALIDATE_NAME':
            return  {
                ...state,
                regForm: {
                    ...state.regForm,
                    name: action.payload.value, 
                    nameValid: action.payload.status,
                    nameValidMessage: action.payload.message
                }
            };
        case 'VALIDATE_SURNAME':
            return  {
                ...state,
                regForm: {
                    ...state.regForm,
                    surname: action.payload.value, 
                    surnameValid: action.payload.status,
                    surnameValidMessage: action.payload.message
                }
            };
        case 'VALIDATE_MIDNAME':
            return  {
                ...state,
                regForm: {
                    ...state.regForm,
                    midName: action.payload.value, 
                    midNameValid: action.payload.status,
                    midNameValidMessage: action.payload.message
                }
            };
        case 'VALIDATE_EMAIL':
            return  {
                ...state,
                regForm: {
                    ...state.regForm,
                    email: action.payload.value, 
                    emailValid: action.payload.status,
                    emailValidMessage: action.payload.message
                }
            };

        case 'VALIDATE_GENDER':
            return {
                ...state,
                regForm: {
                    ...state.regForm,
                    gender: action.payload.value,
                    genderValid: action.payload.status,
                    genderValidStat: action.payload.stat
                }
            }

        case 'VALIDATE_AGE':
            return {
                ...state,
                regForm: {
                    ...state.regForm,
                    age: action.payload.value,
                    ageValid: action.payload.status
                }
            }
        case 'VALIDATE_IMAGE':
            return {
                ...state,
                regForm: {
                    ...state.regForm,
                    imageData: action.payload.imgData,
                    imageStatus: action.payload.status,
                    imageValid: action.payload.imageValid
                }
            }
        // case 'VALIDATE_FORM_INVALID':
        //     return {
        //         ...state,
        //         imageStatus: action.payload.status,
        //         nameValidMessage: action.payload.status,
        //         surnameValidMessage: action.payload.status,
        //         midNameValidMessage: action.payload.status,
        //         emailValidMessage: action.payload.status,
        //         genderValid: action.payload.status,
        //         imageValid: action.payload.status,
        //         ageValid: action.payload.status
        //     }

        case 'VALIDATE_LOGIN_EMAIL':
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    email: action.payload.value,
                    emailValid: action.payload.status,
                    emailValidMessage: action.payload.message
                }
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    password: action.payload.value,
                }
            }
        case 'REG_TO_LOGIN':
            return {
                ...state,
                    regForm:{
                        ...state.regForm,
                        regToLoginRedirect:{
                            password: action.payload.password,
                            message: action.payload.message,
                            show: action.payload.show,
                            alertStyle: action.payload.alertStyle
                        }
                    }
            }
        default:
            return state;
    }
}

export default inputValidate;