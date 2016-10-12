import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';

const renderComponent = (ComponentClass, state={}, props={})=>{
    let instance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );
    let children = (type)=> TestUtils.scryRenderedComponentsWithType(instance, type); 
    return {
        instance,
        simulate:(eventName, value, idx=0, _instance = instance)=>{
            let el = $(ReactDOM.findDOMNode(_instance));
            TestUtils.Simulate[eventName](el.find(value)[idx]);
        },
        find: (_instance, value)=>{
            let el = $(ReactDOM.findDOMNode(_instance));
            return el.find(value);
        },
        children,
        wrapped: children(ComponentClass)[0].getWrappedInstance()
    }
}




export {renderComponent, expect};

