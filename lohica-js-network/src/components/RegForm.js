import React from 'react';
import {Form, Row, Grid, Button, Alert, Well} from 'react-bootstrap';
import {connect} from 'react-redux';
import {regValidHandle, regValidHideMes, regValidShowMes} from '../actions/inputAction'

import {EmailInput} from './index';
import {GenderRadio} from './index';
import {AgeInput} from './index';
import {ImageInput} from './index';
import {NameInput} from './index';
import {SurnameInput} from './index';
import {MidnameInput} from './index';
 

class RegistrationForm extends  React.Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        console.log(this.props.inputState.regForm.regValidateState);
        let {emailValid, imageValid, nameValid, surnameValid, genderValidStat, name, surname, midName, email, gender, age} = this.props.store.formInput.regForm;
        e.preventDefault();
        if(emailValid && imageValid && nameValid && surnameValid && genderValidStat) {

            let data = new FormData();

            data.append('file', this.props.inputState.regForm.imageData);
            data.append('name', name);
            data.append('surname', surname);
            data.append('midname', midName);
            data.append('email', email);
            data.append('gender', gender);
            data.append('age', age);

            // beginning of fetch

            fetch('/signup',{
                method: 'POST',
                body: data
            }).then((mes) => mes.json())
                .then(data => {
                    // show success or warning alert depending on user got registered or not
                    switch(data.statusCode){
                        case 200:
                            this.props.dispatch(regValidHandle({
                                password: data.userPass,
                                message: "You have successfully registered, here's your password: ",
                                show: true,
                                alertStyle: "success"
                            }));                            
                            break;
                        case 409:
                            this.props.dispatch(regValidHandle({
                                password: "",
                                message: "User with that email already exists",
                                show: true,
                                alertStyle: "danger"
                            }));
                            break;
                        case 400: 
                            this.props.dispatch(regValidHandle({
                                password: "",
                                message: data.message,
                                show: true,
                                alertStyle: "warning"
                            }));
                            break;
                        default:
                            break
                            
                    }  
                    
                    this.props.dispatch(regValidHideMes({showWarning: false}));                  
                })
                .catch(err => console.log(err));


        } else {
            this.props.dispatch(regValidShowMes({showWarning: true, show: false}));
        }
    }


    render() { 
        let regValidStore = this.props.inputState.regForm.regValidateState;

        let alert = <Alert bsStyle={regValidStore.alertStyle}>
                    <h3>
                        {regValidStore.message}<strong>{this.props.inputState.regForm.regValidateState.password}</strong>
                    </h3>
                </Alert>;

        let alertAllFields = <Alert bsStyle="warning">
                    <h4>
                        Please fill in all the fileds marked with '*'
                    </h4>
                </Alert>;

        // age options
        let Options = [];
        for(let i =1; i<=99; i++){
            Options.push(`${i}`);
        }
        return (
             
        <Form horizontal>
            {regValidStore.show ? alert : null}
            <h3>Registration</h3> 
            <Grid>
                <Row>
                    <Well>

                        <NameInput
                            size='small'
                            id='formControlName'
                            label='Name*'
                            name='name'
                            placeholder='Enter name'
                        />

                        <SurnameInput
                            size='small'
                            id='formControlSurname'
                            label='Surname*'
                            name='surname'
                            placeholder='Enter surname'
                        />

                        <MidnameInput
                            size='small'
                            id='formControlMidName'
                            label='Middle Name'
                            name='midName'
                            placeholder='Enter midname'
                        />

                        <EmailInput
                            size='small'
                            id='formControlEmail'
                            label='Email*'
                            name='email'
                            placeholder='Enter email'
                        />

                        <GenderRadio
                            id="formControlGender*"
                        />

                        <AgeInput
                            id="formControlAge*" 
                        />

                        <ImageInput
                            id="formControlFile*"
                        />
                        {regValidStore.showWarning ? alertAllFields : null}
                        <Button 
                            bsStyle="success"
                            onClick={this.handleSubmit}
                            >Submit</Button>
                    </Well>
                </Row>
            </Grid>
        </Form> );
    }
}

const mapStateToProps = (initState) => {
    return {
        inputState: initState.formInput,
        store: initState
    }
}

const  matchDispatchToProps = (dispatch) => {
    return {regValidHandle, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(RegistrationForm);