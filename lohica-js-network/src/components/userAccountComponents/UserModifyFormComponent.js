import React from 'react';
import { Form, Row, Col, Image, Button } from 'react-bootstrap';
import { NameInput, SurnameInput, MidnameInput, EmailInput, GenderRadio, AgeInput, ImageInput } from '../index';

class UserModifyFormComponent extends React.Component {

    render() {
        return (
            <Form horizontal>
                <Row>
                    <Col xs={6}>
                        <NameInput
                            size='small'
                            id='formControlName'
                            label='Name*'
                            name='name'
                            placeholder='Enter name'
                            col1={4}
                            col2={8}
                        />

                        <SurnameInput
                            size='small'
                            id='formControlSurname'
                            label='Surname*'
                            name='surname'
                            placeholder='Enter surname'
                            col1={4}
                            col2={8}
                        />

                        <MidnameInput
                            size='small'
                            id='formControlMidName'
                            label='Middle Name'
                            name='midName'
                            placeholder='Enter midname'
                            col1={4}
                            col2={8}
                        />

                        <EmailInput
                            size='small'
                            id='formControlEmail'
                            label='Email*'
                            name='email'
                            placeholder='Enter email'
                            col1={4}
                            col2={8}
                        />
                        
                        <GenderRadio
                            id="formControlGender*"
                            col1={4}
                            col2={8}
                        />

                        <AgeInput
                            id="formControlAge*" 
                            col1={4}
                            col2={8}
                        />
                    </Col>
                    <Col xs={6}>
                        <Image className="textcenter" src={window.location.origin + '/samplePhoto/157071c2acafea36920d603ec54b53dc'} rounded responsive />
                    {/* </Col>
                    <Col xs={6}> */}
                        <ImageInput 
                            id="formControlFile*"
                            col1={3}
                            col2={9}
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Button 
                            bsStyle="success"
                            // onClick={this.handleSubmit}
                            >Submit</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default UserModifyFormComponent;