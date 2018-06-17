import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateMidName, validateName, validateSurname } from '../../actions/inputAction'


class EmailInput extends React.Component {
    constructor(props){
        super(props);

        this.store = this.props.store;

        this.dispatchEmitter = this.dispatchEmitter.bind(this);
    }

    dispatchEmitter = (charNum, val) => {
        let testRe = /^([a-zA-Z]+)$/;
        if(charNum > 32){
            return {mes:"error", status: false};
        } else if (charNum < 1) {
            return {mes:null, status: false};
        } else if(testRe.test(val)) {
            return {mes:"success", status:true};
        } else if(!testRe.test(val)){
            return {mes:"error", status: false};
        }
        return {mes:null, status: false};
    }
    
    handleValidateInput = (e) => {
        let inputId = e.target.id;
        let inputVal = e.target.value;  
        let charNum = inputVal.length;
        let disEm = this.dispatchEmitter(charNum, inputVal);

        switch(inputId){
            case 'formControlName':
                this.store.dispatch(validateName({
                    value:inputVal, 
                    status: disEm.status,
                    message: disEm.mes
                }));
                break;
            case 'formControlSurname':
                this.store.dispatch(validateSurname({
                    value:inputVal, 
                    status: disEm.status,
                    message: disEm.mes
                }));
                break;
            case 'formControlMidName':
                this.store.dispatch(validateMidName({
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
                        type={this.props.type}
                        name={this.props.name}
                        value={this.props.value}
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
    return {validateMidName, validateSurname, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(EmailInput);