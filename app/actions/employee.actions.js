import {ADD_EMPLOYEE} from './types';

export const employeeAction = (name)=>{
    return {
        type: ADD_EMPLOYEE,
        payload: {
            name: name,
            key: name
        }
    };
}