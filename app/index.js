const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const { Page } = require('./components/Page');
const { style } = require('./old/css/style.scss')

ReactDOM.render(<Page />, $('body').get(0));