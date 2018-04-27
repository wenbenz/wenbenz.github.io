const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const { HashRouter, Switch, Route } = require('react-router-dom');
const { Page } = require('./components/Page');
const { style } = require('./style.scss');

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/experiences" render={() => <Page page="experiences" />} />
            <Route path="/projects" render={() => <Page page="projects" />} />
            <Route path="/" render={() => <Page page="home" />} />
        </Switch>
    </HashRouter>,
    // <Page page="home" />,
    $('div').get(0));