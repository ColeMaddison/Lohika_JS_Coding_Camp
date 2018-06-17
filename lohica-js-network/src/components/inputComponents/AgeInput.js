import React from 'react';
import {FormGroup, ControlLabel, Col, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateAge } from '../../actions/inputAction'

class AgeInput extends React.Component {
    constructor(props){
        super(props);

        this.store = this.props.store;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if(e.target.value){
            return this.store.dispatch(validateAge({
                value: e.target.value,
                status: null
            }));
        }
        // add this later for the submit button validation 
        else {
            return this.store.dispatch(validateAge({
                value:'',
                status: 'error'
            }));
        }
    }

    render() {
        // age options
        let Options = [];
        for(let i =1; i<=99; i++){
            Options.push(`${i}`);
        }
        return (
            <FormGroup 
                bsSize= "small"
                controlId={this.props.id}
                >
                <Col md={4}>
                    <Col mdOffset={10}>
                        <ControlLabel>Age</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl 
                        name='age'
                        componentClass="select" 
                        placeholder="---select age---"
                        onChange={this.handleChange}
                        value={this.props.inputState.validateAge}
                        >
                            <option>---select age---</option>
                            {Options.map(num => {
                                return <option key={num} value={num}>{num}</option>
                            })} 
                    </FormControl>
                </Col>
            </FormGroup>
        );
    }
}

const mapStateToProps = (initState) => {
    return {
        inputState: initState.formInput
    }
}

const matchDispatchTpProps = (dispatch) => {
    return {validateAge, dispatch}
}

export default connect(mapStateToProps, matchDispatchTpProps)(AgeInput);