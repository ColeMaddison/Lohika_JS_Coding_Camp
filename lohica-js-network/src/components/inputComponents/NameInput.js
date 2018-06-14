import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap'


class RegistrationInput extends React.Component {
    render() {
        return (
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
                        onChange={this.props.onChange}
                        />
                </Col>
            </FormGroup>
        );
    }
}


export default RegistrationInput;