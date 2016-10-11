var jsdom = require('jsdom'), 
    _$ = require('jquery'),
    chai = require('chai'),
    chaiJquery = require('chai-jquery');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

global.$ = _$(window);
chaiJquery(chai, chai.util, $);
global.expect = chai.expect;


