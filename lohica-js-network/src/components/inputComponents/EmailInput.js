import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateEmail } from '../../actions/inputAction'


class EmailInput extends React.Component {
    constructor(props){
        super(props);

        this.store = this.props.store;
        this.valid = this.store.getState().formInput.emailValid;

        // this.sendValid = this.sendValid.bind(this);
    }



    formFieldValidation (key) {
        let charNum = this.state[key].length;
        if(charNum > 10) {
            this.setState({[`${key}Valid`]: 'success'});
            return;
        } else if(charNum > 5) {
            this.setState({[`${key}Valid`]: 'warning'});
            return;
        } else if(charNum > 0) {
            this.setState({[`${key}Valid`]: 'error'});
            return;
        }
        return null;
    }

    // set state is async - to see value - use callback or async await
    async handleChange(e) {
        let key = e.target.name;
        let val = e.target.value;   
        await this.setState({[key]: val});
        this.formFieldValidation(key);
        console.log(this.name);
    }

    handleValidateInput = (e) => {
        // let inputValidateState = '';

        let key = e.target.name;
        let val = e.target.value;  
        this.store.dispatch(validateEmail({value:e.target.value, status: "warning"}));
        // console.log(this.store.getState().valid);
    }

    render(){
        return(
            <FormGroup 
                bsSize= {this.props.size}
                controlId ={this.props.id}
                validationState="warning"
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
    return {validateEmail, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(EmailInput);