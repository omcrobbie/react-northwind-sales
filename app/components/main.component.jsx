import React, {Component} from 'react';
import PanelComponent from 'panel.component';
import {connected} from 'utils';
import {addEmployeeAction} from '../actions/employee.actions';

class MainComponent extends Component{
    handleAdd = ()=>{
        let name = this.name.value;
        this.props.dispatch(addEmployeeAction(name));
        this.name.value='';
    }
    render(){
        let {employees} = this.props;
        let panels = employees.map((employee)=>{
            return (<PanelComponent {...employee}/> )
        });
        return(
            <div className="row">
                <div className="callout primary">
                    <input type="text" ref={name=>this.name = name}/>
                    <button className="button" onClick={this.handleAdd}>+Add</button>
                </div>
                <div>  
                    {panels}
                </div>
            </div>
        )
    }
}

export default connected(MainComponent);