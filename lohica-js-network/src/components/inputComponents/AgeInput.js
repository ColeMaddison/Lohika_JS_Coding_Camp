import React from 'react';
import { FormGroup, ControlLabel, Col, FormControl} from 'react-bootstrap';
import { connect } from 'react-redux';
import { validateAge } from '../../actions/inputAction'
import { ageOptions } from './handlers/utils'

class AgeInput extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let dispatchObj = {
            value: '',
            status: 'error'
        };

        if(e.target.value){
            dispatchObj.value = e.target.value;
            dispatchObj.status = null;
        }
        return this.props.dispatch(validateAge(dispatchObj));
    }

    render() {
        let { ageValid } = this.props.inputState;
        let { validateAge } = this.props.inputState.regForm;
        let { id } = this.props;

        return (
            <FormGroup 
                bsSize= "small"
                controlId={id}
                validationState={ageValid}
                >
                <Col md={4}>
                    <Col mdOffset={9}>
                        <ControlLabel>Age</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl 
                        name='age'
                        componentClass="select" 
                        placeholder="---select age---"
                        onChange={this.handleChange}
                        value={validateAge}
                        >
                            <option>---select age---</option>
                            {ageOptions.map(num => {
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

const matchDispatchToProps = (dispatch) => {
    return {validateAge, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(AgeInput);