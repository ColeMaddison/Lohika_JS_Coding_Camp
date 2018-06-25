import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateMidName } from '../../actions/inputAction'
import {nameMidSurRegExp} from './handlers/regExpInputValid';

const elem = <Alert bsStyle="warning">
                <strong>Warning</strong> Middle name should be max 32 letters
            </Alert>;

class TextInput extends React.Component {
    constructor(props){
        super(props);

        this.dispatchEmitter = this.dispatchEmitter.bind(this);
        this.handleValidateInput = this.handleValidateInput.bind(this);
    }


    dispatchEmitter = (val) => {
        let mes = null,
            show = false,
            status = false;

        if(val.length<1){
            return {mes, status, show};
        } else if(nameMidSurRegExp(val)) {
            return {mes:"success", status:true, show};
        } else if(!nameMidSurRegExp(val)){
            return {mes:"error", status, show: true};
        }
    }
    
    handleValidateInput = (e) => {
        let inputVal = e.target.value;

        let disEm = this.dispatchEmitter(inputVal);
        this.props.dispatch(validateMidName({
            value:inputVal, 
            status: disEm.status,
            message: disEm.mes,
            show: disEm.show
        }));
    }

    render(){

        return(
            <FormGroup 
                bsSize= {this.props.size}
                controlId ={this.props.id}
                validationState={ this.props.inputState.regForm.midNameValidMessage }                
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
                    {this.props.inputState.regForm.midNameValidMessageShow ? elem : null}
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
    return {validateMidName, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(TextInput);