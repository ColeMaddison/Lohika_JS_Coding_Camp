import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions/loginActions';
import { VALIDATE_NAME, VALIDATE_AGE, VALIDATE_EMAIL, VALIDATE_GENDER, VALIDATE_SURNAME, VALIDATE_IMAGE, 
        VALIDATE_LOGIN_EMAIL, VALIDATE_MIDNAME, SET_PASSWORD, SUCCESS_REG, REG_VALID_HANDLE, 
        REG_VALID_REMOVE_ERRORMES, REG_VALID_SHOW_ERRORMES } from '../actions/inputAction';
import { SET_USER_ID, SET_USER_DATA } from '../actions/userAccountActions';

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
        nameValidMessageShow: false,
        surnameValid: false,
        surnameValidMessage: null,
        surnameValidMessageShow: false,
        midNameValid: false,
        midNameValidMessage: null,
        midNameValidMessageShow: false,
        emailValid: false,
        emailValidMessage: null,
        emailValidMessageShow: false,
        genderValid: null,
        genderValidStat: false,
        imageData: '',
        imageValid: false,
        imageValidShow: false,
        regToLoginRedirect: {
            password: '',
            message: '',
            show: false,
            alertStyle: ''
        },
        regValidateState: {
            alertStyle: null,
            showWarning: false,
            show: false,
            password: '',
            message: '',
        },
        successReg: false
    },
    loginForm:{
        email: '',
        password: '',
        emailValid: false,
        emailValidMessage: null,
        emailValidMessageShow: false
    },
    isAuthenticated: false,
    authenticatedErrorMessage: '',
    userId: null,
    userAccount: {
        modify: false,
        data: {
            name: '',
            surname: '',
            midName: '',
            email: '',
            age: '',
            gender: '',
            image: ''
        }
    }
};

const inputValidate = (state=initState, action) => {
    let ap = action.payload;
    switch(action.type){

        case SET_USER_DATA:
            return {
                ...state,
                userAccount: {
                    ...state.userAccount,
                    data: {
                        name: ap.name,
                        surname: ap.surname,
                        midName: ap.midName,
                        email: ap.email,
                        age: ap.age,
                        gender: ap.gender,
                        image: ap.photoLink
                    }
                }
            }

        case AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true
            }
        case UNAUTHENTICATED:
            return {
                ...state,
                isAuthenticated: false
            }
        case AUTHENTICATION_ERROR: 
            return {
                ...state,
                authenticatedErrorMessage: ap
            }
        case VALIDATE_NAME:
            return  {
                ...state,
                regForm: {
                    ...state.regForm,
                    name: ap.value, 
                    nameValid: ap.status,
                    nameValidMessage: ap.message,
                    nameValidMessageShow: ap.show
                }
            };
        case VALIDATE_SURNAME:
            return  {
                ...state,
                regForm: {
                    ...state.regForm,
                    surname: ap.value, 
                    surnameValid: ap.status,
                    surnameValidMessage: ap.message,
                    surnameValidMessageShow: ap.show
                }
            };
        case VALIDATE_MIDNAME:
            return  {
                ...state,
                regForm: {
                    ...state.regForm,
                    midName: ap.value, 
                    midNameValid: ap.status,
                    midNameValidMessage: ap.message,
                    midNameValidMessageShow: ap.show
                }
            };
        case VALIDATE_EMAIL:
            return  {
                ...state,
                regForm: {
                    ...state.regForm,
                    email: ap.value, 
                    emailValid: ap.status,
                    emailValidMessage: ap.message,
                    emailValidMessageShow: ap.show
                }
            };

        case VALIDATE_GENDER:
            return {
                ...state,
                regForm: {
                    ...state.regForm,
                    gender: ap.value,
                    genderValid: ap.status,
                    genderValidStat: ap.stat
                }
            }

        case VALIDATE_AGE:
            return {
                ...state,
                regForm: {
                    ...state.regForm,
                    age: ap.value,
                    ageValid: ap.status
                }
            }
        case VALIDATE_IMAGE:
            return {
                ...state,
                regForm: {
                    ...state.regForm,
                    imageData: ap.imgData,
                    imageStatus: ap.status,
                    imageValid: ap.imageValid,
                    imageValidShow: ap.show
                }
            }
        case VALIDATE_LOGIN_EMAIL:
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    email: ap.value,
                    emailValid: ap.status,
                    emailValidMessage: ap.message,
                    emailValidMessageShow: ap.show
                }
            }
        case SET_PASSWORD:
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    password: ap.value,
                }
            }
        case SUCCESS_REG:
            return {
                ...state,
                    regForm:{
                        ...state.regForm,
                        successReg: ap.regStatus
                    }
            }
        case REG_VALID_HANDLE:
            return {
                ...state,
                regForm: {
                    ...state.regForm,
                    regValidateState: {
                        alertStyle: ap.alertStyle,
                        showWarning: ap.showWarning,
                        show: ap.show,
                        password: ap.password,
                        message: ap.message
                    }
                }
            }
        case REG_VALID_REMOVE_ERRORMES:
            return {
                regForm: {
                    ...state.regForm,
                    regValidateState: {
                        ...state.regForm.regValidateState,
                        showWarning: ap.showWarning
                    }
                }
            }
        case REG_VALID_SHOW_ERRORMES:
            return {
                ...state,
                 regForm: {
                     ...state.regForm,
                     regValidateState: {
                         ...state.regForm.regValidateState,
                         showWarning: ap.showWarning,
                         show: ap.show
                     } 
                 }
            }
        case SET_USER_ID:
            return {
                ...state,
                userId: ap
            }
        default:
            return state;
    }
}

export default inputValidate;