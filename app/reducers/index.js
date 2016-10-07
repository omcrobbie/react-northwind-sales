import {employeeReducer} from './employee.reducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    employees: employeeReducer
});

export default reducers;

