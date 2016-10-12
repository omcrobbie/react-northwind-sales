import {ADD_EMPLOYEE, UPDATE_EMPLOYEE} from '../actions/types';

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
            });
        default:
            return state;
    }
}
