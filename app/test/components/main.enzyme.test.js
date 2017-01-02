import {mount, shallow} from 'enzyme';
import C_MainComponent, {MainComponent} from '../../components/main.component';
import PanelComponent from '../../components/panel.component';
import {shallowWithStore, shallowWithState} from 'enzyme-redux';
import Employee from 'employee';
import React from 'react';
import {createMockStore} from 'redux-test-utils';
import chai,{expect} from 'chai';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../../reducers';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {addEmployeeAction} from '../../actions/employee.actions';
chai.use(sinonChai);
describe('MainComponent', ()=>{
    let state ={
                employees: [
                    new Employee('charlie'),
                    new Employee('bobby')
                ]
            };
    let instance;
    describe('shallow', ()=>{
        beforeEach(()=>{
        instance = shallow(<MainComponent employees={state.employees}/>);
        });
        it('should exist', ()=>{
            expect(instance).to.exist;
            //expect(instance.node.props.employees).to.have.length(2);
        });
        it('renders one panel for each employee', ()=>{
            //console.log(instance.node);
            expect(instance.find('Connect(PanelComponent)')).to.have.length(2);
        });
    });
    describe('mounted', ()=>{
        //  before(()=>{
        //     instance = mount(
        //         <Provider store={createStore(reducers,state)}>
        //             <C_MainComponent/>
        //         </Provider>);
        // });
        let spy;
        before(()=>{
            spy = sinon.spy();
            instance = shallow(<MainComponent employees={state.employees} dispatch={spy}/>)
        });
        it('adds new component', ()=>{
            instance.instance().name = {value:'Davy'};
            instance.instance().handleAdd();
            expect(spy).calledWith(addEmployeeAction('Davy'));
            //expect(instance.instance().props.employees).to.have.length(2);
        });
    });
});