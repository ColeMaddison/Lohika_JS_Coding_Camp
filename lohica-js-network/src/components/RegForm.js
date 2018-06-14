import React from 'react';
import {FormControl, FormGroup, ControlLabel, Form, Col, Row, Grid, Button, Radio} from 'react-bootstrap'
// import RegistrationInput from './RegFormInput';
import NameInput from './inputComponents/NameInput';
import EmailInput from './inputComponents/EmailInput';
 

class RegistrationForm extends  React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            midName: '',
            email: '',
            age: '', 
            gender:'',
            nameValid: null,
            surnameValid: null,
            midNameValid: null,
            emailValid: null
        }


        // bind this to the class method
        this.handleChange = this.handleChange.bind(this);

        this.formFieldValidation = this.formFieldValidation.bind(this);

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
        console.log(this.state);
    }

    render() {  

        // age options
        let Options = [];
        for(let i =1; i<=99; i++){
            Options.push(`${i}`);
        }
        return (
        <Form horizontal>
            <Grid>
                <Row>

                    <NameInput 
                        size = 'small'
                        id = 'formControlName'
                        valid = {this.state.nameValid}
                        label = 'Name'
                        name = 'name'
                        value={ this.state.name }
                        placeholder='Enter name'
                        onChange={ this.handleChange } 
                    />

                    <NameInput 
                        size = 'small'
                        id = 'formControlSurname'
                        valid = {this.state.surnameValid}
                        label = 'Surname'
                        name = 'surname'
                        value={ this.state.surname }
                        placeholder='Enter surname'
                        onChange={ this.handleChange } 
                    />

                    <NameInput 
                        size = 'small'
                        id = 'formControlMidName'
                        valid = {this.state.midNameValid}
                        label = 'Middle Name'
                        name = 'midName'
                        value={ this.state.midName }
                        placeholder='Enter midName'
                        onChange={ this.handleChange } 
                    />

                    <EmailInput 
                        size = 'small'
                        id = 'formControlEmail'
                        valid = {this.state.emailValid}
                        label = 'email'
                        name = 'email'
                        value={ this.state.email }
                        placeholder='Enter email'
                        onChange={ this.handleChange } 
                    />
                    
                    <FormGroup controlId="gender">
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Gender</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <Radio name='radioGroup' value='male' inline>Male</Radio>
                            <Radio name='radioGroup' value='female' inline>Female</Radio>
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        bsSize= "small"
                        controlId="formControlAge"
                        >
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Age</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl 
                                name='age'
                                componentClass="select" 
                                placeholder="---select age---"
                                onChange={this.handleChange}
                                value={this.state.age}
                                >
                                    <option value="">---select age---</option>
                                    {Options.map(num => {
                                        return <option key={num} value={num}>{num}</option>
                                    })} 
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        bsSize= "small"
                        controlId='formControlsFile'>
                        <Col md={4}>
                            <Col mdOffset={9}>
                                <ControlLabel>Your photo</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={6}>
                            <FormControl type="file"/>
                        </Col>
                    </FormGroup>
                    <Button bsStyle="success">Success</Button>
                </Row>
            </Grid>
        </Form> );
    }
}

export default RegistrationForm;