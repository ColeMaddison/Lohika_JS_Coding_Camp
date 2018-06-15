import React from 'react';
import {FormGroup, ControlLabel, Col, Radio} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateGender } from '../../actions/inputAction'

class GenderRadio extends React.Component {
    constructor(props){
        super(props);

        this.store = this.props.store;
        this.radioHandler = this.radioHandler.bind(this);
    }

    radioHandler(e) {
        console.log(this.props.inputState);
        if(e.target.value){
            return this.store.dispatch(validateGender({
                value:e.target.value,
                status: null
            }));
        } else {
            return this.store.dispatch(validateGender({
                value:'',
                status: 'error'
            }));
        }
    }

    render() {
        return (
            <FormGroup 
                controlId={this.props.id}
                validationState={this.props.inputState.genderValid}
                >
                <Col md={4}>
                    <Col mdOffset={10}>
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