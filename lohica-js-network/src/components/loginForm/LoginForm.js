import React from 'react';
import { Form, Grid, Row, Button, Col   } from 'react-bootstrap';
import {EmailInput} from '../index'

class LoginForm extends React.Component {
    render(){
        return (
            <Form >
                {/* {this.state.show ? alert : null} */}
                <h3>Registration</h3> 
                <Grid>
                    <Row>
                        <Col lg={12}>
                        <EmailInput
                            size='small'
                            id='formControlEmail'
                            label='Email*'
                            name='email'
                            placeholder='Enter email'
                            />
                        <Button 
                            bsStyle="success" 
                            disabled={false}
                            // onClick={this.handleSubmit}
                        >Submit</Button>
                {/* <EmailInput
                    size='small'
                    id='formControlEmail'
                    label='Email*'
                    name='email'
                    placeholder='Enter email'
                    /> */}
                    </Col>
                    </Row>
                </Grid>
            </Form> 
        )
    }
}

export default LoginForm;