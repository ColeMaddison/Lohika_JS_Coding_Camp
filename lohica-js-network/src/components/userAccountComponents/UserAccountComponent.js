import React from 'react';
// import { connect } from 'react-redux';
import { Grid, Row, Col, Well, Form, Button, Image} from 'react-bootstrap';
import MainPanelComponent from '../HomeComponents/MainPanelComponent';
import { EmailInput, GenderRadio, AgeInput, ImageInput, NameInput, SurnameInput, MidnameInput } from '../index';

class UserAccountComponent extends React.Component{

    constructor(props){
        super(props);

        console.log(this.props);

        fetch('/account', {
            method: 'POST',
            body: JSON.stringify({id: this.props.userId}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => {
                return res.json()
            })
            .then(res => console.log(res));
    }

    render() {
        
        return (
            <Grid>  
                <Row>
                    <Col xs={6} md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col xs={6} md={8}>
                        <Well>
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
                                        <Image className="textcenter" src={window.location.origin + '/samplePhoto/son-kot.jpg'} rounded responsive />
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
                        </Well>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default UserAccountComponent;