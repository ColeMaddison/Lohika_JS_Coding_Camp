import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateEmail } from '../../actions/inputAction'
import {emailRegExp} from './handlers/regExpInputValid';

const elem = <Alert bsStyle="warning">
                <strong>Warning</strong> Email should be valid (example@mail.com)
            </Alert>;

class EmailInput extends React.Component {
    constructor(props){
        super(props);

        this.handleValidateInput = this.handleValidateInput.bind(this);
    }

    // validation via redux 
    handleValidateInput = (e) => {
        let emailInputVal = e.target.value;  
        let charNum = emailInputVal.length;

        let value = emailInputVal,
            status = false,
            message = null,
            show = false;

        // validate email
        if(emailRegExp(emailInputVal)) {
            return this.props.dispatch(validateEmail({
                value, 
                status: true,
                show,
                message: "success"
            }));
        } else if(charNum > 0) {
            return this.props.dispatch(validateEmail({
                value, 
                status,
                show: true,
                message: "error"
            }));
        }
        return this.props.dispatch(validateEmail({
            value, 
            status,
            show,
            message
        }));
    }

    render(){
        return(
            <FormGroup 
                bsSize= "small"
                controlId ={this.props.id}
                validationState={this.props.inputState.regForm.emailValidMessage}
                >
                <Col md={4}>
                    <Col mdOffset={9}>
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
                        {this.props.inputState.regForm.emailValidMessageShow ? elem : null}
                </Col>
            </FormGroup>
        );
    }
}

// use to connect state (store) with props, to be able to change dynamic the fields
const  mapStateToProps =  (initState) => {
    return {
        inputState: initState.formInput
    }
}

const  matchDispatchToProps = (dispatch) => {
    return {validateEmail, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(EmailInput);