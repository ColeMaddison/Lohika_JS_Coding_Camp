import React from 'react';
import { Form, Grid, Row, Button, Well } from 'react-bootstrap';
import LoginEmailComponent from './LoginEmailComponent';
import LoginPassComponent from './LoginPassComponent';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { signInAction } from '../../actions/logginActions';
 

class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.errorMessage = this.errorMessage.bind(this);
    }

    handleSubmit(e) {
        let { emailValid, email, password } = this.props.store.formInput.loginForm;
        // loginFormSubmit(e, emailValid, email, password, this.props.dispatch);
        if(emailValid){
            this.props.signInAction({email, password}, this.props.history);
        }
        console.log(this.props.store);
    }

    errorMessage(e){
        let errorMes = this.props.store.formInput.authenticatedErrorMessage;
        if(errorMes){
            return (
                <Alert bsStyle="warning">
                    <strong>Warning</strong> Incorrect email or password
                </Alert>
            )
        }
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
                            {this.errorMessage()}
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