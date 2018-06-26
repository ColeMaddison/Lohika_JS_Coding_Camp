import React from 'react';
import {FormGroup, ControlLabel, Col, Radio} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateGender } from '../../actions/inputAction';

class GenderRadio extends React.Component {
    constructor(props){
        super(props);
        this.radioHandler = this.radioHandler.bind(this);
    }

    radioHandler(e) {
        let value = e.target.value;

        let dispatchObj = {
            value: "",
            status: "error",
            stat: false
        };

        if(value){
            dispatchObj.value = value;
            dispatchObj.status = null;
            dispatchObj.stat = true;
        } 

        return this.props.dispatch(validateGender(dispatchObj));
    }

    render() {
        return (
            <FormGroup 
                bsSize= "small"
                controlId={this.props.id}
                validationState={this.props.inputState.regForm.genderValid}
                >
                <Col md={4}>
                    <Col mdOffset={9}>
                        <ControlLabel>Gender</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <Radio 
                        name='radioGroup' 
                        value='Male' 
                        onChange={this.radioHandler}
                        inline>Male</Radio>
                    <Radio 
                        name='radioGroup' 
                        value='Female' 
                        onChange={this.radioHandler}
                        inline>Female</Radio>
                </Col>
            </FormGroup>
        );
    }
}

const mapStateToProps = (initState) => {
    return {
        inputState: initState.formInput
    }
}

const matchDispatchTpProps = (dispatch) => {
    return {validateGender, dispatch}
}

export default connect(mapStateToProps, matchDispatchTpProps)(GenderRadio);