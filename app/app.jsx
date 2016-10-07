import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import router from 'app/router';
import reducers from './reducers'


$(document).foundation();

require('style!css!sass!applicationStyles');

const store = redux.createStore(reducers, {}, 
        redux.compose(redux.applyMiddleware(thunk), window.devToolsExtension()));


ReactDOM.render(
    <Provider store={store}>
       {router} 
    </Provider>,
    document.getElementById('app')
);