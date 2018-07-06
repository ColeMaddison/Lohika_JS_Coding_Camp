import React from 'react';
import { Form, Grid, Row, Button, Well } from 'react-bootstrap';
import LoginEmailComponent from './LoginEmailComponent';
import LoginPassComponent from './LoginPassComponent';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { signInAction } from '../../actions/loginActions';
 
const errorMes = <Alert bsStyle="warning">
                    <strong>Warning</strong> Incorrect email or password
                </Alert>;

class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let { emailValid, email, password } = this.props.store.formInput.loginForm;
        if(emailValid){
            this.props.signInAction({email, password}, this.props.history);
        }
    }

    render(){
        // console.log(this.props);
        let { authenticatedErrorMessage } = this.props.inputState;

        return (
            <Form horizontal key="logiForm">
                <h3>Login</h3> 
                <Grid>
                    <Row>
                        <Well>
                            <LoginEmailComponent />    
                            <LoginPassComponent />
                            <Button 
                                bsStyle="success"
                                onClick={this.handleSubmit}
                                >Submit</Button>
                            {authenticatedErrorMessage ? errorMes : null}
                        </Well>
                    </Row>
                </Grid>
            </Form> 
        )
    }
}

const mapStateToProps = (initState) => {
    return{
        inputState: initState.formInput,
        store: initState
    }
}

export default connect(mapStateToProps, {signInAction})(LoginForm);