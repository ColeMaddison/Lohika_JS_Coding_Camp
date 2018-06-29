import React from 'react';
import { FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setPassword } from '../../actions/inputAction'

class LoginPassComponent extends React.Component {
    constructor(props){
        super(props);

        this.handleValidateInput = this.handleValidateInput.bind(this);
    }

    handleValidateInput(e){
        let inputVal = e.target.value;

        this.props.dispatch(setPassword({
            value: inputVal
        }));
    }

    render() {
        let { password } = this.props.inputState.loginForm;

        return(
            <FormGroup
                name="loginInput"
                key="pass"
                bsSize= "small"
                >
                <Col md={4}>
                    <Col mdOffset={9}>
                        <ControlLabel>Password</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleValidateInput}
                        />
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
    return {setPassword, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginPassComponent);