import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateMidName, validateName, validateSurname } from '../../actions/inputAction'


class TextInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            nameShow: false,
            surnameShow: false,
            midnameShow: false,
            errorMessage: "Not valid, max 32 letters."
        }

        this.dispatchEmitter = this.dispatchEmitter.bind(this);
        this.handleValidateInput = this.handleValidateInput.bind(this);
    }


    dispatchEmitter = (val) => {
        let testRe = /^([a-zA-Z]{1,32})$/;
        if(val.length<1){
            return {mes:null, status: false};
        } else if(testRe.test(val)) {
            return {mes:"success", status:true};
        } else if(!testRe.test(val)){
            return {mes:"error", status: false};
        }
    }
    
    handleValidateInput = (e) => {
        let inputId = e.target.id;
        let inputVal = e.target.value;

        let disEm = this.dispatchEmitter(inputVal);

        switch(inputId){
            case 'formControlName':
                this.props.dispatch(validateName({
                    value:inputVal, 
                    status: disEm.status,
                    message: disEm.mes
                }));
                break;
            case 'formControlSurname':
                this.props.dispatch(validateSurname({
                    value:inputVal, 
                    status: disEm.status,
                    message: disEm.mes
                }));
                break;
            case 'formControlMidName':
                this.props.dispatch(validateMidName({
                    value:inputVal, 
                    status: disEm.status,
                    message: disEm.mes
                }));
                break;
            default:
                break;
        }
    }

    render(){
        let color = '';
        switch(this.props.id){
            case 'formControlName':
                color = this.props.inputState.nameValidMessage;
                break;
            case 'formControlSurname':
                color = this.props.inputState.surnameValidMessage;
                break;
            case 'formControlMidName':
                color = this.props.inputState.midNameValidMessage;
                break;
            default:
                break;
        }
        return(
            <FormGroup 
                bsSize= {this.props.size}
                controlId ={this.props.id}
                validationState={ color }                
                >
                <Col md={4}>
                    <Col mdOffset={10}>
                        <ControlLabel>{this.props.label}</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl
                        name={this.props.name}
                        value={this.props.inputState.regForm.value}
                        placeholder={this.props.placeholder}
                        onChange={this.handleValidateInput}
                    />
                </Col>
            </FormGroup>
        );
    }
}

const  mapStateToProps =  (initState) => {
    return {
        inputState: initState.formInput
    }
}

const  matchDispatchToProps = (dispatch) => {
    return {validateMidName, validateSurname, validateName, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(TextInput);