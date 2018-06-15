import React from 'react';
import {FormControl, FormGroup, ControlLabel, Form, Col, Row, Grid, Button} from 'react-bootstrap'
// import RegistrationInput from './RegFormInput';
import NameInput from './inputComponents/NameInput';
import EmailInput from './inputComponents/EmailInput';
import GenderRadio from './inputComponents/GenderRadio';
 

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

                    <NameInput store={this.props.store}
                        size = 'small'
                        id = 'formControlName'
                        label = 'Name'
                        name = 'name'
                        placeholder='Enter name'
                    />

                    <NameInput store={this.props.store}
                        size = 'small'
                        id = 'formControlSurname'
                        label = 'Surname'
                        name = 'surname'
                        placeholder='Enter surname'
                    />

                    <NameInput store={this.props.store}
                        size = 'small'
                        id = 'formControlMidName'
                        label = 'Middle Name'
                        name = 'midName'
                        placeholder='Enter midName'
                    />

                    <EmailInput store={this.props.store}
                        size = 'small'
                        id = 'formControlEmail'
                        label = 'email'
                        name = 'email'
                        placeholder='Enter email'
                    />

                    <GenderRadio store={this.props.store}
                        id="gender"
                    />
                    
                    {/* <FormGroup 
                        controlId="gender"
                        >
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Gender</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <Radio name='radioGroup' value='male' inline>Male</Radio>
                            <Radio name='radioGroup' value='female' inline>Female</Radio>
                        </Col>
                    </FormGroup> */}

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