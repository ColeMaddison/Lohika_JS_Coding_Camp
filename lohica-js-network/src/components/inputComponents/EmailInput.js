import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateEmail } from '../../actions/inputAction'


class EmailInput extends React.Component {
    constructor(props){
        super(props);

        this.handleValidateInput = this.handleValidateInput.bind(this);
    }

    // validation via redux 
    handleValidateInput = (e) => {
        let emailInputVal = e.target.value;  
        let charNum = emailInputVal.length;

        // validate email
        if(/^[\w]+@[\w]+\.[a-zA-z]{2,}$/i.test(emailInputVal)) {
            return this.props.dispatch(validateEmail({
                value:emailInputVal, 
                status: true,
                message: "success"
            }));
        } else if(charNum > 0) {
            return this.props.dispatch(validateEmail({
                value:emailInputVal, 
                status: false,
                message: "error"
            }));
        }
        return this.props.dispatch(validateEmail({
            value:emailInputVal, 
            status: false,
            message: null
        }));

    }

    render(){
        return(
            <FormGroup 
                bsSize= "small"
                controlId ={this.props.id}
                validationState={this.props.inputState.emailValidMessage}
                >
                <Col md={4}>
                    <Col mdOffset={9}>
                        <ControlLabel>{this.props.label}</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl
                        name={this.props.name}
                        value={this.props.inputState.value}
                        placeholder={this.props.placeholder}
                        onChange={this.handleValidateInput}
                        />
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