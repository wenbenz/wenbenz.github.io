const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const { BrowserRouter, Switch, Route } = require('react-router-dom');
const { Page } = require('./components/Page');
const { style } = require('./style.scss');

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" render={() => <Page page="home" />} />
            <Route path="/experiences" component="Page" render={() => <Page page="home" />} />
        </Switch>
    </BrowserRouter>,
    // <Page page="home" />,
    $('div').get(0));