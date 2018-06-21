import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col,  Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateName } from '../../actions/inputAction';

const elem = <Alert bsStyle="warning">
                <strong>Warning</strong> Name should be max 32 letters
            </Alert>;

class NameInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        };

        this.dispatchEmitter = this.dispatchEmitter.bind(this);
        this.handleValidateInput = this.handleValidateInput.bind(this);
    }

    dispatchEmitter = (val) => {
        let testRe = /^([a-zA-Z]{1,32})$/;
        if(val.length<1){
            this.setState({show: false});
            return {mes:null, status: false};
        } else if(testRe.test(val)) {
            this.setState({show: false});
            return {mes:"success", status:true};
        } else if(!testRe.test(val)){
            this.setState({show: true});
            return {mes:"error", status: false};
        }
    }
    
    handleValidateInput = (e) => {
        let inputVal = e.target.value;

        let disEm = this.dispatchEmitter(inputVal);

            this.props.dispatch(validateName({
            value:inputVal, 
            status: disEm.status,
            message: disEm.mes
        }));
    }

    render(){
        
        return(
            <FormGroup 
                bsSize= {this.props.size}
                controlId ={this.props.id}
                validationState={ this.props.inputState.nameValidMessage }                
                >
                <Col md={4}>
                    <Col mdOffset={10}>
                        <ControlLabel>{this.props.label}</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl
                        name={this.props.name}
                        value={this.props.inputState.value}
                        placeholder={this.props.placeholder}
                        onChange={this.handleValidateInput}
                    />
                    { this.state.show ? elem : null}
                </Col>
            </FormGroup>
        );
    }
}

const  mapStateToProps =  (initState) => {
    return {
        inputState: initState.formInput
    }
}

const  matchDispatchToProps = (dispatch) => {
    return {validateName, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(NameInput);