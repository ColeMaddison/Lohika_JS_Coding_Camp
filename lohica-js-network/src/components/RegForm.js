import React from 'react';
import {connect} from 'react-redux';
import {FormComponent, RedirToLoginButton} from './index';

class RegistrationForm extends  React.Component {
    render() {
        return(
            <div>
                {this.props.inputState.regForm.successReg ? <RedirToLoginButton /> : <FormComponent/>}
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

export default connect(mapStateToProps)(RegistrationForm);