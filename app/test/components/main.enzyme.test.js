import {mount, shallow} from 'enzyme';
import MainComponent from '../../components/main.component';
import PanelComponent from '../../components/panel.component';
import {shallowWithStore, shallowWithState} from 'enzyme-redux';
import Employee from 'employee';
import React from 'react';
import {createMockStore} from 'redux-test-utils';
import {expect} from 'chai';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../../reducers';
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
        instance = shallowWithState(<MainComponent/>, state);
        });
        it('should exist', ()=>{
            expect(instance).to.exist;
            expect(instance.node.props.employees).to.have.length(2);
        });
        it('renders one panel for each employee', ()=>{
            //console.log(instance.node);
            expect(instance.shallow().find('Connect(PanelComponent)')).to.have.length(2);
        });
    });
    describe('mounted', ()=>{
         before(()=>{
            instance = mount(
                <Provider store={createStore(reducers,state)}>
                    <MainComponent/>
                </Provider>);
        });
        it('adds new component', ()=>{
            instance.find('input').node.value = 'Davy';
            instance.findWhere(n=>n.text()==='+Add').at(1).simulate('click');
            expect(instance.find(PanelComponent)).to.have.length(3);
        });
    });
});