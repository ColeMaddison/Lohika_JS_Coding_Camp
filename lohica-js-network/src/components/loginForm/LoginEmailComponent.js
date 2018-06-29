import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Col, ControlLabel, Alert } from 'react-bootstrap';
import {validateLoginEmail} from '../../actions/inputAction';
import checkEmail from './handlers/regExpEmail';

const elem = <Alert bsStyle="warning">
                <strong>Warning</strong> Email should be valid (example@mail.com)
            </Alert>;

class LoginEmailComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        }

        this.handleValidateInput = this.handleValidateInput.bind(this);
    }

    handleValidateInput(e){
        let emailLoginVal = e.target.value;
        let charNum = emailLoginVal.length;

        let dispatchObj = {
            value: emailLoginVal,
            status: false,
            message: null,
            show: false
        };

        // validate email
        if(checkEmail(emailLoginVal)) {
            dispatchObj.status = true;
            dispatchObj.message = "success";
        } else if(charNum > 0) {
            dispatchObj.show = true;
            dispatchObj.message = "error";
        }
        console.log(dispatchObj);

        return this.props.dispatch(validateLoginEmail(dispatchObj));
    }

    render() {
        return(
            <FormGroup 
                key={this.props.key}
                bsSize= "small"
                controlId ="loginEmailId"
                validationState={this.props.inputState.loginForm.emailValidMessage}
                >
                <Col md={4}>
                    <Col mdOffset={9}>
                        <ControlLabel>Email</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl
                        name="email"
                        value={this.props.inputState.loginForm.email}
                        placeholder="Email"
                        onChange={this.handleValidateInput}
                        />
                        {this.props.inputState.loginForm.emailValidMessageShow ? elem : null}
                </Col>
            </FormGroup>
        )
    }
}

const mapStateToProps = (initstate) => {
    return {
        inputState: initstate.formInput
    }
}

const matchDispatchToProps = (dispatch) => {
    return {validateLoginEmail, dispatch}
}

export default connect(mapStateToProps,matchDispatchToProps)(LoginEmailComponent);
