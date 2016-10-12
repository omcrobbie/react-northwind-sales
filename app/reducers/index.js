import {employeesReducer} from './employee.reducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    employees: employeesReducer
});

export default reducers;

