import React from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {validate} from '../../actions/inputAction'


class EmailInput extends React.Component {
    constructor(props){
        super(props);
        this.sendValid = this.sendValid.bind(this);
    }

    sendValid(e) {
        console.log(this.props);
        console.log(this.state);
        let key = e.target.name;
        this.props.validate(key);
    }

    render(){
        return(
            <FormGroup 
                bsSize= {this.props.size}
                controlId ={this.props.id}
                validationState={this.props.valid}
                >
                <Col md={4}>
                    <Col mdOffset={10}>
                        <ControlLabel>{this.props.label}</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl
                        type={this.props.type}
                        name={this.props.name}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        onChange={this.sendValid}
                        />
                </Col>
            </FormGroup>
        );
    }
}

const  mapStateToProps =  (state) => {
    return {
        inputs: state.inputs
    }
}

const  matchDispatchToProps = (dispatch) => {
    return {validate: validate, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(EmailInput);