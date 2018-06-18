import React from 'react';
import {Form, Row, Grid, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import NameInput from './inputComponents/NameInput';
import EmailInput from './inputComponents/EmailInput';
import GenderRadio from './inputComponents/GenderRadio';
import AgeInput from './inputComponents/AgeInput';
import ImageInput from './inputComponents/ImageInput';
 

class RegistrationForm extends  React.Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        let inputFieldsData = this.props.store.getState().formInput;
        e.preventDefault();
        console.log(inputFieldsData.emailValid, inputFieldsData.imageValid, inputFieldsData.surnameValid, inputFieldsData.midNameValid, inputFieldsData.nameValid);
        if(inputFieldsData.emailValid && inputFieldsData.imageValid && inputFieldsData.nameValid && inputFieldsData.surnameValid && inputFieldsData.midNameValid) {
            console.log('yes');
        }
    }

    render() {  
        // console.log(this.props);

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
                        label = 'Name'
                        name = 'name'
                        placeholder='Enter name'
                    />

                    <NameInput
                        size = 'small'
                        id = 'formControlSurname'
                        label = 'Surname'
                        name = 'surname'
                        placeholder='Enter surname'
                    />

                    <NameInput
                        size = 'small'
                        id = 'formControlMidName'
                        label = 'Middle Name'
                        name = 'midName'
                        placeholder='Enter midName'
                    />

                    <EmailInput
                        size = 'small'
                        id = 'formControlEmail'
                        label = 'email'
                        name = 'email'
                        placeholder='Enter email'
                    />

                    <GenderRadio
                        id="formControlGender"
                    />

                    <AgeInput
                        id="formControlAge" 
                    />

                    <ImageInput
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

const mapStateToProps = (initState) => {
    return {
        inputState: initState.formInput
    }
}

export default connect(mapStateToProps)(RegistrationForm);