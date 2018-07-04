import React from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col, Button, ButtonGroup, Thumbnail } from 'react-bootstrap';
import { NameInput, SurnameInput, MidnameInput, EmailInput, GenderRadio, AgeInput, ImageInput } from '../index';

import { disableModifyUserData } from '../../actions/modifyUserDataAction';

class UserModifyFormComponent extends React.Component {

    constructor(props){
        super(props);

        this.handleCancelModify = this.handleCancelModify.bind(this);
        this.handleModifySubmit = this.handleModifySubmit.bind(this);

    }

    handleModifySubmit(e) {
        console.log(this.props);
    }

    handleCancelModify() {
        this.props.dispatch(disableModifyUserData());
    }

    componentWillUnmount() {
        this.props.dispatch(disableModifyUserData());
    }

    render() {
        const { age, email, gender, image, midName, name, surname } = this.props.userData;
        return (
            <Form horizontal>
                <Row>
                    <Col md={12}>
                        <Col md={5}>
                            <Thumbnail className="textcenter" src={typeof image === 'object' ? image[0]: `/${image}`} />
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
        regData: initState.formInput.regForm
    }
}

const matchDispatchToProps = (dispatch) => {
    return {disableModifyUserData, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(UserModifyFormComponent);
