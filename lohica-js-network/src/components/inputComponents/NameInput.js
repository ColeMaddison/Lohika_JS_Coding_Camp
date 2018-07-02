import React from 'react';
import { FormControl, FormGroup, ControlLabel, Col, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { validateName } from '../../actions/inputAction';
import { nameRegExp } from './handlers/nameRegExp';

const elem = <Alert bsStyle="warning">
                <strong>Warning</strong> Name should be max 32 letters
            </Alert>;

class NameInput extends React.Component {
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

            this.props.dispatch(validateName({
            value:inputVal, 
            status: disEm.status,
            message: disEm.mes,
            show: disEm.show
        }));
    }

    render(){
        let { nameValidMessage, nameValidMessageShow, value } = this.props.inputState.regForm;
        let { id, label, name, placeholder, col1, col2, offset } = this.props;

        return(
            <FormGroup 
                bsSize= "small"
                controlId ={id}
                validationState={ nameValidMessage }                
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
                    { nameValidMessageShow ? elem : null}
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
    return {validateName, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(NameInput);