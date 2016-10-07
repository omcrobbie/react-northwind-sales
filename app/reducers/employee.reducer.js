import {ADD_EMPLOYEE} from '../actions/types';

export const employeeReducer = (state=[], action)=>{
    switch(action.type){
        case ADD_EMPLOYEE:
            return [...state, action.payload];
        default:
            return state;
    }
}