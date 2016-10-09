import React, {Component} from 'react';
import PanelComponent from 'panel.component';
import {connect} from 'react-redux';
import {employeeAction} from '../actions/employee.actions';

class MainComponent extends Component{
    handleAdd(){
        let name = this.refs.name.value;
        this.props.dispatch(employeeAction(name));
        this.refs.name.value = '';
    }
    render(){
        let {employees} = this.props;
        let panels = employees.map((employee)=>{
            return (<PanelComponent {...employee}/> )
        });
        return(
            <div className="row">
                <div className="callout primary">
                    <input type="text" ref="name"/>
                    <button className="button" onClick={this.handleAdd.bind(this)}>+Add</button>
                </div>
                <div>  
                    {panels}
                </div>
            </div>
        )
    }
}

export default connect(s=>s,null,null,{withRef:true})(MainComponent);