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
        if(inputFieldsData.emailValid && inputFieldsData.imageValid && inputFieldsData.nameValid && inputFieldsData.surnameValid && inputFieldsData.midNameValid) {
            // user info
            let userName = inputFieldsData.name;
            let userSurname = inputFieldsData.surname;
            let userMidName = inputFieldsData.midName;
            let userEmail = inputFieldsData.email;
            let userGender = inputFieldsData.gender;
            let userAge = inputFieldsData.age;

            let data = new FormData();

            data.append('file', this.props.inputState.imageData);
            data.append('name', userName);
            data.append('surname', userSurname);
            data.append('midname', userMidName);
            data.append('email', userEmail);
            data.append('gender', userGender);
            data.append('age', userAge);

            fetch('/signup',{
                method: 'POST',
                body: data
            }).then((mes) => mes.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
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
            <h3>Registration</h3> 
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