import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Col, ControlLabel, Alert } from 'react-bootstrap';
import {validateLoginEmail} from '../../actions/inputAction';

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

        // validate email
        if(/^[\w]+@[\w]+\.[a-zA-z]{2,}$/i.test(emailLoginVal)) {
            this.setState({show: false});
            return this.props.dispatch(validateLoginEmail({
                value:emailLoginVal, 
                status: true,
                message: "success"
            }));
        } else if(charNum > 0) {
            this.setState({show: true});
            return this.props.dispatch(validateLoginEmail({
                value:emailLoginVal, 
                status: false,
                message: "error"
            }));
        }
        this.setState({show: false});
        return this.props.dispatch(validateLoginEmail({
            value:emailLoginVal, 
            status: false,
            message: null
        }));
    }

    render() {
        console.log(this.props.inputState.loginForm );
        return(
            <FormGroup 
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
                        {this.state.show ? elem : null}
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