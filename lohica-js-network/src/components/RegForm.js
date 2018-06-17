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

        this.state = this.props.store;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        let inputFieldsData = this.state.getState().formInput;
        e.preventDefault();
        console.log(inputFieldsData.emailValid, inputFieldsData.imageValid, inputFieldsData.surnameValid, inputFieldsData.midNameValid, inputFieldsData.nameValid);
        if(inputFieldsData.emailValid && inputFieldsData.imageValid && inputFieldsData.nameValid && inputFieldsData.surnameValid && inputFieldsData.midNameValid) {
            console.log('yes');
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
                    <Button 
                        bsStyle="success" 
                        disabled={false}
                        onClick = {this.handleSubmit}
                        >Submit</Button>
                </Row>
            </Grid>
        </Form> );
    }
}

export default RegistrationForm;