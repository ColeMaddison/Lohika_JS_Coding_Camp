import React from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class RedirToLoginButton extends React.Component {
    render() {
        let regValidStore = this.props.inputState.regForm.regValidateState;

        let alert = <Alert bsStyle={regValidStore.alertStyle}>
                    <h3>
                        {regValidStore.message}<strong>{this.props.inputState.regForm.regValidateState.password}</strong>
                    </h3>
                </Alert>;
                                                            //BROKEN IN HERE SOMEWHERE, continue here
        return (
            <div>
                {regValidStore.show ? alert : null}
                <LinkContainer to="/login" >                                    
                    <Button bsStyle="success">
                        To login
                    </Button>
                </LinkContainer>
            </div>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        inputState: initState.formInput,
        store: initState
    }
}

export default connect(mapStateToProps)(RedirToLoginButton);