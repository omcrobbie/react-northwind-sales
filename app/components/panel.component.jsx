import React, {Component} from 'react';
import {connected} from 'utils';

class PanelComponent extends Component{
    render(){
        let {name} = this.props;
        return (
            <div className="callout columns large-3">
                <h3>{name}</h3>
                <div className="button-group">
                    <button className="button">North</button>
                    <button className="button">South</button>
                    <button className="button">East</button>
                    <button className="button">West</button>
                </div>
            </div>
        )        
    }
}
export default connected(PanelComponent);