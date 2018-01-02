var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var { Page } = require('./components/Page');

ReactDOM.render(<Page />, $('body').get(0));