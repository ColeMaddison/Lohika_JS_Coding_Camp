import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateEmail, validateMidName, validateName, validateSurname } from '../../actions/inputAction'


class EmailInput extends React.Component {
    constructor(props){
        super(props);

        this.store = this.props.store;

        this.sendValid = this.sendValid.bind(this);
    }



    sendValid(e) {
        console.log(this.props);
        console.log(this.state);
        let key = e.target.name;
        this.props.validate(key);
    }

    handleValidateInput = (e) => {
        let inputId = e.target.id;

        switch(inputId){
            case 'formControlName':
                this.store.dispatch(validateName(e.target.value));
                break;
            case 'formControlSurname':
                this.store.dispatch(validateSurname(e.target.value));
                break;
            case 'formControlMidName':
                this.store.dispatch(validateMidName(e.target.value));
                break;
            default:
                break;
        }
    }

    render(){
        return(
            <FormGroup 
                bsSize= {this.props.size}
                controlId ={this.props.id}
                validationState={this.props.valid}
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

const  mapStateToProps =  (state) => {
    return {
        inputs: state.store
    }
}

const  matchDispatchToProps = (dispatch) => {
    return {validateEmail, validateMidName, validateSurname, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(EmailInput);