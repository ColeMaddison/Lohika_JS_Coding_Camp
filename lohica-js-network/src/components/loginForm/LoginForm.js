import React from 'react';
import { Form, Grid, Row, Button, Well } from 'react-bootstrap';
import LoginEmailComponent from './LoginEmailComponent';
import LoginPassComponent from './LoginPassComponent';
import { connect } from 'react-redux';
import { loginFormSubmit } from './handlers/loginSubmitHandler';
 

class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(this.props);
        let { emailValid, email, password } = this.props.store.formInput.loginForm;
        loginFormSubmit(e, emailValid, email, password);
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

const mapStateToProps = (initState) => {
    return{
        store: initState
    }
}

export default connect(mapStateToProps)(LoginForm);