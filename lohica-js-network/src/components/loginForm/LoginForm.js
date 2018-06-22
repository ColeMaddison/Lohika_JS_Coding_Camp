import React from 'react';
import { Form, Grid, Row, Button, Well } from 'react-bootstrap';
import LoginEmailComponent from './LoginEmailComponent';
import LoginPassComponent from './LoginPassComponent';

class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){

    }


    render(){
        return (
            <Form horizontal>
                {/* {this.state.show ? alert : null} */}
                <h3>Login</h3> 
                <Grid>
                    <Row>
                        <Well>
                            <LoginEmailComponent />    
                            <LoginPassComponent />    
                            <Button 
                                bsStyle="success" 
                                disabled={false}
                                onClick={this.handleSubmit}
                                >Submit</Button>
                        </Well>
                    </Row>
                </Grid>
            </Form> 
        )
    }
}

export default LoginForm;