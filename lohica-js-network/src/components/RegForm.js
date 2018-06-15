import React from 'react';
import {Form, Row, Grid, Button} from 'react-bootstrap'
// import RegistrationInput from './RegFormInput';
import NameInput from './inputComponents/NameInput';
import EmailInput from './inputComponents/EmailInput';
import GenderRadio from './inputComponents/GenderRadio';
import AgeInput from './inputComponents/AgeInput'
import ImageInput from './inputComponents/ImageInput';
 

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
                        id="formControlGender"
                    />

                    <AgeInput store={this.props.store}
                        id="formControlAge" 
                    />

                    <ImageInput store={this.props.store} 
                        id="formControlFile"
                    />

                    {/* <FormGroup 
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
                    </FormGroup> */}
                    <Button bsStyle="success">Success</Button>
                </Row>
            </Grid>
        </Form> );
    }
}

export default RegistrationForm;