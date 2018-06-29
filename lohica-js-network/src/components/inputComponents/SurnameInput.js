import React from 'react';
import { FormControl, FormGroup, ControlLabel, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { validateSurname } from '../../actions/inputAction'
import { nameRegExp } from './handlers/nameRegExp';

const elem = <Alert bsStyle="warning">
                <strong>Warning</strong> Surname should be max 32 letters
            </Alert>;


class SurnameInput extends React.Component {
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
        } else if(nameRegExp(val)) {
            return {mes:"success", status:true, show};
        } else if(!nameRegExp(val)){
            return {mes:"error", status, show: true};
        }
    }
    
    handleValidateInput = (e) => {
        let inputVal = e.target.value;

        let disEm = this.dispatchEmitter(inputVal);
        this.props.dispatch(validateSurname({
            value:inputVal, 
            status: disEm.status,
            message: disEm.mes,
            show: disEm.show
        }));
    }

    render(){
        let { surnameValidMessageShow, surnameValidMessage, value } = this.props.inputState.regForm;
        let { id, label, name, placeholder, size } = this.props;

        return(
            <FormGroup 
                bsSize= {size}
                controlId ={id}
                validationState={surnameValidMessage}                
                >
                <Col md={4}>
                    <Col mdOffset={9}>
                        <ControlLabel>{label}</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={this.handleValidateInput}
                    />
                    {surnameValidMessageShow ? elem : null}
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
    return {validateSurname, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(SurnameInput);