import React from 'react';
import {FormControl, FormGroup, ControlLabel, Form, Col, Row, Grid} from 'react-bootstrap'

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

    formFieldValidation (key) {
        console.log(key);
        let charNum = this.state[key].length;
        if(charNum > 10) {
            return 'success';
        } else if(charNum > 5) {
            console.log('here');
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
        this.setState({[key]: val}, () => {
            this.formFieldValidation(key);
        });
    }

    render() {

        // age 
        let Options = [];
        for(let i =1; i<=99; i++){
            Options.push(`${i}`);
        }   
        return (
        <Form horizontal>
            <Grid>
                <Row>
                    <FormGroup 
                        controlId ="formControlName"
                        // validationState= { this.formFieldValidation() }
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
                                // validationState={this.formFieldValidation()}
                            />
                        </Col>
                    </FormGroup>
                
                    <FormGroup 
                        name="surname"
                        controlId="formControlSurname"
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
                                value={ this.state.surname.value }
                                placeholder="Enter surname"
                                onChange={ this.handleChange }
                                // validationState={this.formFieldValidation()}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        controlId="formControlMidName"
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
                                value={ this.state.midName.value }
                                placeholder="Enter middle name"
                                onChange={ this.handleChange }
                                // validationState={this.formFieldValidation()}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        controlId="formControlEmail"
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
                                value={ this.state.email.value }
                                placeholder="Enter email"
                                onChange={ this.handleChange }
                                // validationState={this.formFieldValidation()}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup 
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
                                value={this.state.age.value}
                                // validationState={this.formFieldValidation()}
                                >
                                    <option value="">---select age---</option>
                                    {Options.map(num => {
                                        return <option key={num} value={num}>{num}</option>
                                    })} 
                            </FormControl>
                        </Col>
                    </FormGroup>
                </Row>
            </Grid>
        </Form> );
    }
}

export default RegistrationForm;
