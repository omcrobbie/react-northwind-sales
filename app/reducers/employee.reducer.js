import {ADD_EMPLOYEE, UPDATE_EMPLOYEE, REMOVE_EMPLOYEE} from '../actions/types';

export const employeesReducer = (state=[], action)=>{
    switch(action.type){
        case ADD_EMPLOYEE:
            return [...state, action.payload];
        case UPDATE_EMPLOYEE:
            return state.map(employee=>{
                if(employee.name===action.payload.name){
                    return {
                        ...employee,
                        ...action.payload
                    };
                }
                return employee;
            });
        case REMOVE_EMPLOYEE:
            return state.filter(employee=>employee.name !== action.payload);
        default:
            return state;
    }
}
