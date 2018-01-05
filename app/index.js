const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const { Page } = require('./components/Page');
const { style } = require('./style.scss');

ReactDOM.render(<Page />, $('body').get(0));