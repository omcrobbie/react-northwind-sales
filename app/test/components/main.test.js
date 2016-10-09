import {renderComponent,expect} from '../test.helper';
import MainComponent from 'main.component';
import PanelComponent from 'panel.component';
describe('MainComponent', ()=>{
    it('should exist', ()=>{
        let {instance} = renderComponent(MainComponent);
        expect(instance).to.exist;
    });
    let state ={
            employees: [
                {name: 'charlie', key: '123'},
                {name: 'bobby', key:'456'}
            ]
        } 
    it('renders one panel for each employee', ()=>{
        let {children} = renderComponent(MainComponent,state);
        expect(children(PanelComponent).length).to.equal(2);
    });
    it('adds new component', ()=>{
        let {wrapped, instance, simulate}= renderComponent(MainComponent, state);
        wrapped.refs.name.value='Davy';
        simulate('click', 'button');
        expect(instance.store.getState().employees.length).to.equal(3);
    });
});