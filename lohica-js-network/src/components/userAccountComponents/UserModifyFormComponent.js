import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { indexRoute } from '../../routes';
import { Form, Row, Col, Button, ButtonGroup, Thumbnail } from 'react-bootstrap';
import { NameInput, SurnameInput, MidnameInput, EmailInput, GenderRadio, AgeInput, ImageInput } from '../index';
import { modifyUserData } from '../../actions/modifyUserDataAction';
import { setValidFields } from '../../actions/modifyUserDataAction';

import { disableModifyUserData } from '../../actions/modifyUserDataAction';

class UserModifyFormComponent extends React.Component {

    constructor(props){
        super(props);

        this.handleCancelModify = this.handleCancelModify.bind(this);
        this.handleModifySubmit = this.handleModifySubmit.bind(this);

    }

    handleModifySubmit(e) {
        
        const { nameValid, imageValid, emailValid, ageValid, genderValidStat, surnameValid, midNameValid } = this.props.validatedFields;
        if(nameValid && imageValid && emailValid && ageValid !== 'error' && genderValidStat && surnameValid && midNameValid){
            const data = new FormData();
            const { name, surname, midName, email, gender, age, imageAsObject } = this.props.userData;
            console.log(imageAsObject);
            const { modifyFlag } = this.props
            data.append('name', name);
            data.append('surname', surname);
            data.append('midname', midName);
            data.append('email', email);
            data.append('gender', gender);
            data.append('age', age);
            data.append('modifyFlag', modifyFlag);
            data.append('file', imageAsObject);
    
            this.props.dispatch(modifyUserData(data));
            window.location.reload();
            this.props.history.push(indexRoute);
        }
    }

    componentDidMount() {
        this.props.dispatch(setValidFields());
    }

    handleCancelModify() {
        this.props.dispatch(disableModifyUserData());
    }

    componentWillUnmount() {
        this.props.dispatch(disableModifyUserData());
    }

    render() {
        const { age, email, gender, image, midName, name, surname } = this.props.userData;
        console.log(this.props.userData);
        return (
            <Form horizontal>
                <Row>
                    <Col md={12}>
                        <Col md={5}>
                            <Thumbnail className="textcenter" src={typeof image === 'object' ? image.imageVal: `/${image}`} />
                            <ImageInput 
                                id="formControlFile"
                                col1={2}
                                col2={2}
                            />
                        </Col>
                        <Col md={7}>
                            <NameInput
                                size='small'
                                id='formControlName'
                                label='Name*'
                                name='name'
                                value={name}
                                placeholder='Enter name'
                                col1={4}
                                col2={8}
                                onChange={this.handleNameChange}
                            />

                            <SurnameInput
                                size='small'
                                id='formControlSurname'
                                label='Surname*'
                                name='surname'
                                value={surname}
                                placeholder='Enter surname'
                                col1={4}
                                col2={8}
                            />

                            <MidnameInput
                                size='small'
                                id='formControlMidName'
                                label='Middle Name'
                                name='midName'
                                value={midName}
                                placeholder='Enter midname'
                                col1={4}
                                col2={8}
                            />

                            <EmailInput
                                size='small'
                                id='formControlEmail'
                                label='Email*'
                                name='email'
                                value={email}
                                placeholder='Enter email'
                                col1={4}
                                col2={8}
                            />
                            
                            <GenderRadio
                                id="formControlGender"
                                value={gender}
                                col1={4}
                                col2={8}
                            />

                            <AgeInput
                                id="formControlAge" 
                                value={age}
                                col1={4}
                                col2={8}
                            />
                        </Col>
                        <Row>
                            <ButtonGroup>
                                <Button 
                                    bsStyle="success"
                                    onClick={this.handleModifySubmit}
                                    >Submit</Button>
                                <Button
                                    bsStyle="default"
                                    onClick={this.handleCancelModify}
                                    >
                                    Cancel</Button>
                            </ButtonGroup>
                        </Row>
                        <Row>
                        </Row>
                    </Col>
                </Row>
            </Form>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        userData: initState.formInput.userAccount.data,
        regData: initState.formInput.regForm,
        userId: initState.formInput.userId,
        modifyFlag: initState.formInput.userAccount.modify,
        validatedFields: initState.formInput.regForm,
        redirect: initState
    }
}

const matchDispatchToProps = (dispatch) => {
    return {disableModifyUserData, dispatch}
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(UserModifyFormComponent));
