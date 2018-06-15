import {combineReducers} from 'redux';
import inputValidate from './inputValidate';

const allReducers = combineReducers({
    formInput: inputValidate
});

export default allReducers;