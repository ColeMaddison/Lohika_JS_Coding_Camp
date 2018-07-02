import React from 'react';
import { FormControl, FormGroup, ControlLabel, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { validateEmail } from '../../actions/inputAction'
import { emailRegExp } from './handlers/emailRegExpCheck';

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

            let dispatchObj = {
                value: emailInputVal,
                status: false,
                message: null,
                show: false
            }

        // validate email
        if(emailRegExp(emailInputVal)) {
            dispatchObj.status = true;
            dispatchObj.message = "success"
        } else if(charNum > 0) {
            dispatchObj.show = true;
            dispatchObj.message = "error";
        }

        return this.props.dispatch(validateEmail(dispatchObj));
    }

    render(){
        let { emailValidMessage, emailValidMessageShow, value } = this.props.inputState.regForm;
        let { name, id, label, placeholder, col1, col2, offset  } = this.props;
        return(
            <FormGroup 
                bsSize= "small"
                controlId ={id}
                validationState={emailValidMessage}
                >
                <Col md={col1}>
                    <Col mdOffset={offset}>
                        <ControlLabel>{label}</ControlLabel>
                    </Col>
                </Col>
                <Col md={col2}>
                    <FormControl
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={this.handleValidateInput}
                        />
                        {emailValidMessageShow ? elem : null}
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