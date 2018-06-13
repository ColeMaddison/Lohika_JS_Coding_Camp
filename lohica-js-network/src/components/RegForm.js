import React from 'react';
import {FormControl, FormGroup, ControlLabel, Form, Col, Row, Grid, Button, Radio} from 'react-bootstrap'

class RegistrationForm extends  React.Component {

    constructor(props, context){
        super(props);
        this.state = {
            name: '',
            surname: '',
            midName: '',
            email: '',
            age: '' 
        }


        // bind this to the class method
        this.handleChange = this.handleChange.bind(this);

        this.formFieldValidation = this.formFieldValidation.bind(this);

    }

    formFieldValidation (field) {
        console.log(this.state);
        let charNum = this.state[field].length;
        if(charNum > 10) {
            return 'success';
        } else if(charNum > 5) {
            return 'warning';
        } else if(charNum > 0) {
            return 'error';
        }
        return null;
    }

    // set state is async - to see value - use callback or async await
    handleChange(e) {
        let key = e.target.name;
        let val = e.target.value;
        this.setState({[key]: val});
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
                    <FormGroup 
                        bsSize= "small"
                        controlId ="formControlName"
                        validationState={this.formFieldValidation('name')}
                        >
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Name</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl
                                type="text"
                                name='name'
                                value={ this.state.name }
                                placeholder="Enter name"
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </FormGroup>
                
                    <FormGroup 
                        bsSize= "small"
                        name="surname"
                        controlId="formControlSurname"
                        validationState={this.formFieldValidation('surname')}
                        >
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Surname</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl
                                type="text"
                                name='surname'
                                value={ this.state.surname }
                                placeholder="Enter surname"
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        bsSize= "small"
                        controlId="formControlMidName"
                        validationState={this.formFieldValidation('midName')}
                        >
                        <Col md={4}>
                            <Col mdOffset={9}>
                                <ControlLabel>Middle Name</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl
                                type="text"
                                name='midName'
                                value={ this.state.midName }
                                placeholder="Enter middle name"
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        bsSize= "small"
                        controlId="formControlEmail"
                        validationState={this.formFieldValidation('email')}
                        >
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Email</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl
                                type="text"
                                name='email'
                                value={ this.state.email }
                                placeholder="Enter email"
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="gender">
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Gender</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <Radio name="radioGroup" value="male" inline>Male</Radio>
                            <Radio name="radioGroup" value="female" inline>Female</Radio>
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
                                // validationState={this.formFieldValidation()}
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
