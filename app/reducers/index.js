import {employeesReducer} from './employee.reducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    employees: employeesReducer,
    greeting: (state='', action)=>{
        if (action.type==='GREETING')
            return action.payload;
        else
            return state;
    }
});

export default reducers;

