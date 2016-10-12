import {renderComponent} from '../test.helper';
import MainComponent from 'main.component';
import PanelComponent from 'panel.component';
import Employee from 'employee';
describe('MainComponent', ()=>{
    it('should exist', ()=>{
        let {instance} = renderComponent(MainComponent);
        expect(instance).to.exist;
    });
    let state ={
            employees: [
                new Employee('charlie'),
                new Employee('bobby')
            ]
        } 
    it('renders one panel for each employee', ()=>{
        let {children} = renderComponent(MainComponent,state);
        expect(children(PanelComponent).length).to.equal(2);
    });
    it('adds new component', ()=>{
        let {wrapped, instance, simulate, children}= renderComponent(MainComponent, state);
        wrapped.name.value = 'Davy';
        simulate('click', 'button');
        expect(instance.store.getState().employees.length).to.equal(3);
    });
});