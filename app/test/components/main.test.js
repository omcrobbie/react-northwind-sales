import {renderComponent} from '../test.helper';
import MainComponent from 'main.component';
import PanelComponent from 'panel.component';
import Employee from 'employee';
xdescribe('MainComponent', ()=>{
    let state ={
            employees: [
                new Employee('charlie'),
                new Employee('bobby')
            ]
        } 
    it('should exist', ()=>{
        let {instance} = renderComponent(MainComponent);
        expect(instance).to.exist;
    });
    it('renders one panel for each employee', ()=>{
        let {children} = renderComponent(MainComponent,state);
        expect(children(PanelComponent).length).to.equal(2);
    });
    it('adds new component', ()=>{
        let {wrapped, instance, simulate}= renderComponent(MainComponent, state);
        wrapped.name.value = 'Davy';
        simulate('click', 'button');
        expect(instance.store.getState().employees.length).to.equal(3);
    });
});