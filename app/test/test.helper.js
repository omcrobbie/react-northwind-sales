import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, {expect} from 'chai';
import chaiJquery from 'chai-jquery';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

const renderComponent = (ComponentClass, props={}, state={})=>{
    let instance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );
    return $(ReactDOM.findDOMNode(instance));
}

export {renderComponent,expect};

