import {renderComponent} from '../test.helper';
import PanelComponent from 'panel.component';
import MainComponent from 'main.component';
import Employee from 'employee';
import TestUtils from 'react-addons-test-utils';

describe('PanelComponent', ()=>{
    it('should exist', ()=>{
        let component = renderComponent(PanelComponent,undefined, new Employee('charlie'));
        expect(component.instance).to.exist;
    });
    it('should toggle region', ()=>{
        let {wrapped, simulate, find} = renderComponent(PanelComponent,undefined, new Employee('charlie'));
        simulate('click', 'button', 0);
        expect(wrapped.props.regions.n).to.be.true;
        console.log(find(wrapped, '.pressed'));
    });
    it('should remove employee', ()=>{
        let state = {
            employees: [
                new Employee('steve'),
                new Employee('shawn')
            ]
        }
        let {instance, simulate, children} = renderComponent(MainComponent, state);
        let panel = children(PanelComponent)[0];
        simulate('click', 'button',0,panel);
        expect(instance.store.getState().employees.length).to.equal(1);
    });
});