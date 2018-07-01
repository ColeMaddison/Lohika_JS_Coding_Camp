import React from 'react';
import { Form, Row, Grid, Button, Alert, Well } from 'react-bootstrap';
import { connect } from 'react-redux';

import { regValidHandle, regValidHideMes, regValidShowMes, successReg } from '../../actions/inputAction'
import { regSubmit } from './handlers/regSubmitReq';

import { EmailInput, GenderRadio, AgeInput, ImageInput, NameInput, SurnameInput, MidnameInput } from '../index';

class formComponent extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
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

            regSubmit(data)
             .then((mes) => mes.json())
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
                            this.props.dispatch(successReg({
                                regStatus: true
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
        let { alertStyle, password, message, show, showWarning } = this.props.inputState.regForm.regValidateState;

        let alert = <Alert bsStyle={alertStyle}>
                    <h3>
                        {message}<strong>{password}</strong>
                    </h3>
                </Alert>;

        let alertAllFields = <Alert bsStyle="warning">
                    <h4>
                        Please fill in all the fileds marked with '*'
                    </h4>
                </Alert>;

        return (
            <Form horizontal>
                {show ? alert : null}
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
                            {showWarning ? alertAllFields : null}
                            <Button 
                                bsStyle="success"
                                onClick={this.handleSubmit}
                                >Submit</Button>
                        </Well>
                    </Row>
                </Grid>
            </Form> 

        );
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

export default connect(mapStateToProps, matchDispatchToProps)(formComponent);