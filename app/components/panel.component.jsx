import React, {Component} from 'react';
import {connected} from 'utils';
import {updateEmployeeAction, removeEmployeeAction} from '../actions/employee.actions';
import cx from 'classnames';

export class PanelComponent extends Component{
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
        let {name, regions} = this.props;
        let _regions = Object.keys(regions).map(r=>regions[r]);
        let buttons = Object.keys(regions).map((r,i)=>{
            let attr = {
                className: `button ${!regions[r] ? 'pressed':''}`,
                onClick:()=>this.toggleRegion(r),
                key: i
            };
            return (<button {...attr}>{r.toUpperCase()}</button>);
        });
        return (
            <div className="callout columns large-3">
                <h3>{name}</h3>
                <button className='button alert' disabled={_regions.some(r=>r===true)} onClick={this.removeEmployee}>Remove</button>
                <div className="button-group">
                    {buttons}
                </div>
            </div>
        )        
    }
}
export default connected(PanelComponent);