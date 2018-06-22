import React from 'react';
import { Form, Grid, Row, Button, Well } from 'react-bootstrap';
import LoginEmailComponent from './LoginEmailComponent';
import LoginPassComponent from './LoginPassComponent';
import { connect } from 'react-redux';
 
class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        let { emailValid, email, password } = this.props.store.formInput.loginForm;
        if(emailValid && password){

            fetch('/login', {
                method: 'POST',
                body: JSON.stringify({
                    'email': email,
                    'password': password
                }),
                headers: {'Content-Type': 'application/json'}
            }).then(mes => mes.json())
                .then(result => localStorage.setItem('tkn', result.userToken))
        } else {
            localStorage.removeItem('tkn');
        }
        let token = localStorage.getItem('tkn');
        
        if(token) {
            fetch('/checkToken', {
                method: 'POST',
                body: JSON.stringify({'token': token}),
                headers: {'Content-Type': 'application/json'}
            }).then(res => console.log(res))
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