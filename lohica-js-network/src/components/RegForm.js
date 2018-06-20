import React from 'react';
import {Form, Row, Grid, Button, Alert} from 'react-bootstrap';
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

        this.state = {
            alertStyle: null,
            show: false,
            password: '',
            message: ''
        }

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
                .then(data => {
                    // show success or warning alert depending on user got registered or not
                    switch(data.statusCode){
                        case 200:
                            this.setState({
                                password: data.userPass,
                                message: "You have successfully registered, here's your password: ",
                                show: true,
                                alertStyle: "success"
                            });
                            break;
                        case 409:
                            this.setState({
                                password: "",
                                message: "User with that email already exists",
                                show: true,
                                alertStyle: "danger"
                            });
                            break;
                            // --------------------------- continue here
                        case 400: 
                            break;
                            
                    }
                    
                })
                .catch(err => console.log(err));
        }
    }

    render() {  

        let alert = <Alert bsStyle={this.state.alertStyle}>
                    <h3>
                        {this.state.message}<strong>{this.state.password}</strong>
                    </h3>
                </Alert>;


        // age options
        let Options = [];
        for(let i =1; i<=99; i++){
            Options.push(`${i}`);
        }
        return (
             
        <Form horizontal>
            {this.state.show ? alert : null}
            <h3>Registration</h3> 
            <Grid>
                <Row>

                    <NameInput
                        show='true'
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