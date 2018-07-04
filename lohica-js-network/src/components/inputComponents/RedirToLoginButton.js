import React from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';

class RedirToLoginButton extends React.Component {

    constructor(props){
        super(props);

        this.handleRedirect = this.handleRedirect.bind(this);

    }
    handleRedirect() {
        window.location.href = '/login';
    }

    render() {
        let regValidStore = this.props.inputState.regForm.regValidateState;

        let alert = <Alert bsStyle={regValidStore.alertStyle}>
                    <h3>
                        {regValidStore.message}<strong>{this.props.inputState.regForm.regValidateState.password}</strong>
                    </h3>
                </Alert>;

        return (
            <div>
                {regValidStore.show ? alert : null}
                <Button 
                    bsStyle="success"
                    onClick={this.handleRedirect}
                    >
                    To login
                </Button>
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