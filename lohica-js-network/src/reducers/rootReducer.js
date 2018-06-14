import {combineReducers} from 'redux';
import inputReducers from './input';
import inputValidate from './inputValidate';

const allReducers = combineReducers({
    inputs: inputReducers,
    valid: inputValidate
});

export default allReducers;