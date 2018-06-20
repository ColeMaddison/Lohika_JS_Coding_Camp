import React from 'react';
import {Form, Row, Grid, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import EmailInput from './inputComponents/EmailInput';
import GenderRadio from './inputComponents/GenderRadio';
import AgeInput from './inputComponents/AgeInput';
import ImageInput from './inputComponents/ImageInput';
import NameInput from './inputComponents/NameInput'
import SurnameInput from './inputComponents/SurnameInput';
import MidnameInput from './inputComponents/MidnameInput';
 

class RegistrationForm extends  React.Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        let {emailValid, imageValid, nameValid, surnameValid, name, surname, midName, email, gender, age} = this.props.store.getState().formInput;
        e.preventDefault();
        if(emailValid && imageValid && nameValid && surnameValid) {

            let data = new FormData();

            data.append('file', this.props.inputState.imageData);
            data.append('name', name);
            data.append('surname', surname);
            data.append('midname', midName);
            data.append('email', email);
            data.append('gender', gender);
            data.append('age', age);

            fetch('/signup',{
                method: 'POST',
                body: data
            }).then((mes) => mes.json())
                // .then(data => console.log(data))
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

                    <SurnameInput
                        size = 'small'
                        id = 'formControlSurname'
                        label = 'Surname'
                        name = 'surname'
                        placeholder='Enter surname'
                    />

                    <MidnameInput
                        size = 'small'
                        id = 'formControlMidName'
                        label = 'Middle Name'
                        name = 'midName'
                        placeholder='Enter midname'
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