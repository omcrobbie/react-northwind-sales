import React, {Component} from 'react';
import {connected} from 'utils';
import {updateEmployeeAction, removeEmployeeAction} from '../actions/employee.actions';

class PanelComponent extends Component{
    constructor(props){
        super(props);
    }
    toggleRegion = (region)=>{
        let {regions,name, dispatch} = this.props;
        regions[region]= !regions[region];
        let update = {
            name: name,
            regions
        }
        dispatch(updateEmployeeAction(update));
    }
    removeEmployee = ()=>{
        let {dispatch,name} = this.props;
        dispatch(removeEmployeeAction(name)); 
    }
    render(){
        let {name, key, regions} = this.props;
        return (
            <div className="callout columns large-3">
                <h3>{name}</h3>
                <button className="button alert" onClick={this.removeEmployee}>Remove</button>
                <div className="button-group">
                    <button className="button" onClick={()=>this.toggleRegion('n')}>North</button>
                    <button className="button" onClick={()=>this.toggleRegion('s')}>South</button>
                    <button className="button" onClick={()=>this.toggleRegion('e')}>East</button>
                    <button className="button" onClick={()=>this.toggleRegion('w')}>West</button>
                </div>
            </div>
        )        
    }
}
export default connected(PanelComponent);