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
        // console.log(this.props);
        let { password } = this.props.inputState;

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

const mapStateToProps = (initState) => {
    return {
        inputState: initState.formInput.loginForm,
        store: initState
    }
}

const matchDispatchToProps = (dispatch) => {
    return {setPassword, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginPassComponent);