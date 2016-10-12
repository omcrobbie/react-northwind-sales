import {ADD_EMPLOYEE, UPDATE_EMPLOYEE} from './types';

export const addEmployeeAction = (name)=>{
    return {
        type: ADD_EMPLOYEE,
        payload: {
            name: name,
            key: name,
            regions: {
                n:false,
                s:false,
                e:false,
                w:false
            }
        }
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