import {mount, shallow} from 'enzyme';
import C_PanelComponent, {PanelComponent} from '../../components/panel.component';
import {shallowWithStore, shallowWithState} from 'enzyme-redux';
import {removeEmployeeAction} from '../../actions/employee.actions';
import Employee from 'employee';
import React from 'react';
import {createMockStore} from 'redux-test-utils';
import chai,{expect} from 'chai';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../../reducers';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {REMOVE_EMPLOYEE} from '../../actions/types';
chai.use(sinonChai);
describe('PanelComponent', ()=>{
    let employee = new Employee('charlie');
    let instance;
    let spy;
    describe('shallow', ()=>{
        beforeEach(()=>{
            spy = sinon.spy();
            instance = shallow(<PanelComponent {...employee} dispatch={spy}/>);
        });
        it('should exist', ()=>{
            expect(instance).to.exist;
        });
        it('should render buttons', ()=>{
            expect(instance.findWhere(n=>n.hasClass('button') && n.text() !== 'Remove')).to.have.length(4);
        });
        it('should remove employee', ()=>{
            instance.findWhere(n=>n.hasClass('button') && n.text() === 'Remove').simulate('click');
            //instance.update();
            expect(spy).calledWith(removeEmployeeAction('charlie'));
        });
        it('should not remove employee if region enabled',()=>{
            let employeeN = new Employee('james');
            employeeN.regions.n = true;
            instance.setProps({...employeeN});
            instance.instance().removeEmployee();
            //instance.find('.alert').simulate('click');
            expect(spy).to.not.have.been.called;

        });
    });
});