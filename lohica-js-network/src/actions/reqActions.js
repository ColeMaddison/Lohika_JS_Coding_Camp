import { signupRoute } from '../routes';
import { postRequestNoHeaders } from '../components/commonHandlers/requestGenerator';
import { regValidHandle, regValidHideMes, regValidShowMes, successReg } from '../actions/inputAction';

export function regSubmit(data){
    return function(dispatch){
        return fetch(signupRoute, postRequestNoHeaders(data))
            .then(mes => mes.json())
            .then(data => {
                // show success or warning alert depending on user got registered or not
                switch(data.statusCode){
                    case 200:
                        this.props.dispatch(regValidHandle({
                            password: data.userPass,
                            message: "You have successfully registered, here's your password: ",
                            show: true,
                            alertStyle: "success"
                        }));
                        this.props.dispatch(successReg({
                            regStatus: true
                        }));                   
                        break;
                    case 409:
                        this.props.dispatch(regValidHandle({
                            password: "",
                            message: "User with that email already exists",
                            show: true,
                            alertStyle: "danger"
                        }));
                        break;
                    case 400: 
                        this.props.dispatch(regValidHandle({
                            password: "",
                            message: data.message,
                            show: true,
                            alertStyle: "warning"
                        }));
                        break;
                    default:
                        break
                        
                }  
                
                this.props.dispatch(regValidHideMes({showWarning: false}));   
            })
            .catch(err => console.log(err));
    }
}