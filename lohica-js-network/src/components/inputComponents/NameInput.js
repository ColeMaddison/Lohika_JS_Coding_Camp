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

    dispatchEmitter = (charNum) => {
        if(charNum > 10) {
            return "success";
        } else if(charNum > 5) {
            return "warning";
        } else if(charNum > 0) {
            return "error";
        }
        return null;
    }

    handleValidateInput = (e) => {
        let inputId = e.target.id;
        let inputVal = e.target.value;  
        let charNum = inputVal.length;

        switch(inputId){
            case 'formControlName':
                this.store.dispatch(validateName({
                    value:inputVal, 
                    status: this.dispatchEmitter(charNum)
                }));
                break;
            case 'formControlSurname':
                this.store.dispatch(validateSurname({
                    value:inputVal, 
                    status: this.dispatchEmitter(charNum)
                }));
                break;
            case 'formControlMidName':
                this.store.dispatch(validateMidName({
                    value:inputVal, 
                    status: this.dispatchEmitter(charNum)
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
                color = this.props.inputState.nameValid;
                break;
            case 'formControlSurname':
                color = this.props.inputState.surnameValid;
                break;
            case 'formControlMidName':
                color = this.props.inputState.midNameValid;
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