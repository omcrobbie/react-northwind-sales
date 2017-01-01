import {renderComponent} from '../test.helper';
import PanelComponent from 'panel.component';
import MainComponent from 'main.component';
import Employee from 'employee';
import TestUtils from 'react-addons-test-utils';

xdescribe('PanelComponent', ()=>{
    it('should exist', ()=>{
        let component = renderComponent(PanelComponent,undefined, new Employee('charlie'));
        expect(component.instance).to.exist;
    });
    it('should toggle region', ()=>{
        let {wrapped, simulate, find} = renderComponent(PanelComponent,undefined, new Employee('charlie'));
        simulate('click', 'button', 1);
        expect(wrapped.props.regions.n).to.be.true;
    });
    it('should toggle regions for multiple panels', ()=>{
        let state = {
            employees:[
                new Employee('dave'),
                new Employee('jim')
            ]
        };
        let {instance,children,simulate} = renderComponent(MainComponent, state);
        let panel = children(PanelComponent)[1];
        simulate('click', 'button', 1, panel);
        expect(instance.store.getState().employees[1].regions.n).to.be.true;
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
    it('should only remove employees with no active regions', ()=>{
        let state = {
            employees:[new Employee('dave')]
        };
        state.employees[0].regions.n = true;
        let {children, simulate, instance} = renderComponent(MainComponent,state);
        let panel = children(PanelComponent)[0];
        simulate('click', 'button', 0, panel);
        expect(instance.store.getState().employees.length).to.equal(1);
    });
});