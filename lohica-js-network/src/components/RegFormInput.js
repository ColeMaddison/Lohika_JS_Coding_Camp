import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap'


const RegistrationInput = (...label) => (
<FormGroup 
    bsSize= {label[0].size}
    controlId ={label[0].id}
    validationState={label[0].valid}
    >
    <Col md={4}>
        <Col mdOffset={10}>
            <ControlLabel>{label[0].label}</ControlLabel>
        </Col>
    </Col>
    <Col md={4}>
        <FormControl
            type={label[0].type}
            name={label[0].name}
            value={label[0].value}
            placeholder={label[0].placeholder}
            onChange={label[0].onChange}
            />
    </Col>
</FormGroup>
);

export default RegistrationInput;