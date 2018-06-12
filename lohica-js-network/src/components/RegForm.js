import React from 'react';
import {FormControl, FormGroup, ControlLabel, Form, Col, Row, Grid} from 'react-bootstrap'

class RegistrationForm extends  React.Component {

    constructor(props, context){
        super(props, context);

        // bind this to the class method
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            value: ''
        }
    }

    formFieldValidation () {
        let charNum = this.state.value.length;
        if(charNum > 10) return 'success';
        else if(charNum > 5) return 'warning'
        else if(charNum > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }


    render() {
        return (
        <Form horizontal>
            <Grid>
                <Row>
                    <FormGroup 
                        controlId ="formControlName"
                        validationState= { this.formFieldValidation() }
                        >
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Name</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl
                                type="text"
                                // value={ this.state.value }
                                placeholder="Enter name"
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </FormGroup>
                
                    <FormGroup 
                        controlId="formControlSurname"
                        validationState={this.formFieldValidation()}
                        >
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Surname</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl
                                type="text"
                                // value={ this.state.value }
                                placeholder="Enter surname"
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        controlId="formControlMidName"
                        validationState={this.formFieldValidation()}
                        >
                        <Col md={4}>
                            <Col mdOffset={9}>
                                <ControlLabel>Middle Name</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl
                                type="text"
                                // value={ this.state.value }
                                placeholder="Enter middle name"
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        controlId="formControlEmail"
                        validationState={this.formFieldValidation()}
                        >
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Email</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl
                                type="text"
                                // value={ this.state.value }
                                placeholder="Enter email"
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup 
                        controlId="formControlAge"
                        validationState={this.formFieldValidation()}
                        >
                        <Col md={4}>
                            <Col mdOffset={10}>
                                <ControlLabel>Age!!!!</ControlLabel>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormControl
                                type="text"
                                // value={ this.state.value }
                                placeholder="Enter age"
                                onChange={ this.handleChange }
                            />
                        </Col>
                    </FormGroup>
                </Row>
            </Grid>
        </Form> );
    }
}

export default RegistrationForm;
