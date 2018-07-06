import React from 'react';
import { FormGroup, ControlLabel, Col, Radio } from 'react-bootstrap';
import { connect } from 'react-redux';
import { validateGender } from '../../actions/inputAction';
import { setUserDataGender } from '../../actions/modifyUserDataAction';

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

        this.props.dispatch(setUserDataGender(e.target.value));

        return this.props.dispatch(validateGender(dispatchObj));
    }

    render() {
        let { genderValid } = this.props.inputState.regForm;
        let { id, col1, col2, offset } = this.props;

        const checkValue = this.props.value;
 
        return (
            <FormGroup 
                bsSize= "small"
                controlId={id}
                validationState={genderValid}
                >
                <Col md={col1}>
                    <Col mdOffset={offset}>
                        <ControlLabel>Gender</ControlLabel>
                    </Col>
                </Col>
                <Col md={col2}>
                    <Radio 
                        name='radioGroup' 
                        value='Male' 
                        checked={checkValue && checkValue === 'Male'}
                        onChange={this.radioHandler}
                        inline>Male</Radio>
                    <Radio 
                        name='radioGroup' 
                        value='Female' 
                        checked={checkValue && checkValue === 'Female'}
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