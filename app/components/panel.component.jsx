import React, {Component} from 'react';
import {connected} from 'utils';
import {updateEmployeeAction, removeEmployeeAction} from '../actions/employee.actions';
import cx from 'classnames';

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
        let _regions = Object.keys(regions).map(r=>regions[r]);
        let toggleState = (idx)=>{
            return `button ${!_regions[idx] ? 'pressed':''}`; 
        }
        return (
            <div className="callout columns large-3">
                <h3>{name}</h3>
                <button className='button alert' disabled={_regions.some(r=>r===true)} onClick={this.removeEmployee}>Remove</button>
                <div className="button-group">
                    <button className={toggleState(0)} onClick={()=>this.toggleRegion('n')}>North</button>
                    <button className={toggleState(1)} onClick={()=>this.toggleRegion('s')}>South</button>
                    <button className={toggleState(2)} onClick={()=>this.toggleRegion('e')}>East</button>
                    <button className={toggleState(3)} onClick={()=>this.toggleRegion('w')}>West</button>
                </div>
            </div>
        )        
    }
}
export default connected(PanelComponent);