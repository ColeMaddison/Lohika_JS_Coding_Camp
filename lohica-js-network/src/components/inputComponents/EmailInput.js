import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateEmail } from '../../actions/inputAction'


class EmailInput extends React.Component {
    constructor(props){
        super(props);

        this.store = this.props.store;
        this.valid = this.store.getState().formInput.emailValid;
    }

    // validation via redux 
    handleValidateInput = (e) => {
        let emailInputVal = e.target.value;  
        let charNum = emailInputVal.length;
        if(charNum > 10) {
            return this.store.dispatch(validateEmail({
                value:emailInputVal, 
                status: "success"
            }));
        } else if(charNum > 5) {
            return this.store.dispatch(validateEmail({
                value:emailInputVal, 
                status: "warning"
            }));
        } else if(charNum > 0) {
            return this.store.dispatch(validateEmail({
                value:emailInputVal, 
                status: "error"
            }));
        }
        return this.store.dispatch(validateEmail({
            value:emailInputVal, 
            status: null
        }));

    }

    render(){
        return(
            <FormGroup 
                bsSize= {this.props.size}
                controlId ={this.props.id}
                validationState={this.props.inputState.emailValid}
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