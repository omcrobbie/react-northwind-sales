import {ADD_EMPLOYEE, UPDATE_EMPLOYEE, REMOVE_EMPLOYEE} from './types';
import Employee from 'employee';

export const addEmployeeAction = (name)=>{
    return {
        type: ADD_EMPLOYEE,
        payload: new Employee(name)
    };
}

export const updateEmployeeAction = (updates)=>{
    return {
        type: UPDATE_EMPLOYEE,
        payload:{
            ...updates
        }
    }
}

export const removeEmployeeAction = (key)=>{
    return {
        type: REMOVE_EMPLOYEE,
        payload:key
    };
}