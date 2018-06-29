import React from 'react';
import { Form, Grid, Row, Button, Well } from 'react-bootstrap';
import LoginEmailComponent from './LoginEmailComponent';
import LoginPassComponent from './LoginPassComponent';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { signInAction } from '../../actions/logginActions';
 
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
        console.log(this.props.store);
    }

    render(){
        let { authenticatedErrorMessage } = this.props.store.formInput;

        return (
            <Form horizontal key="logiForm">
                <h3>Login</h3> 
                <Grid>
                    <Row>
                        <Well>
                            <LoginEmailComponent key="email" />    
                            <LoginPassComponent key="pass" />
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
        store: initState
    }
}

// const  matchDispatchToProps = (dispatch) => {
//     return {signInAction, dispatch}
// }

export default connect(mapStateToProps, {signInAction})(LoginForm);