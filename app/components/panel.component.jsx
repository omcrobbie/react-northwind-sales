import React, {Component} from 'react';
import {connected} from 'utils';
import {updateEmployeeAction} from '../actions/employee.actions';

class PanelComponent extends Component{
    constructor(props){
        super(props);
        this.dispatch = this.props.dispatch;
    }
    toggleRegion = (region)=>{
        let regions = this.props.regions;
        regions[region]= !regions[region];
        let update = {
            name:this.props.name,
            regions
        }
        this.props.dispatch(updateEmployeeAction(update));
    }
    render(){
        let {name} = this.props;
        return (
            <div className="callout columns large-3">
                <h3>{name}</h3>
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