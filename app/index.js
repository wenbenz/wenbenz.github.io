import { ExperiencesPage } from './pages/ExperiencesPage';
import { ProjectsPage } from './pages/ProjectsPage';

const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const { HashRouter, Switch, Route } = require('react-router-dom');
const { Page } = require('./components/Page');
const { Home } = require('./pages/Home')
const { style } = require('./style.scss');

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/experiences" render={() => <ExperiencesPage />} />
            <Route path="/projects" render={() => <ProjectsPage />} />
            <Route path="/" render={() => <Home />} />
        </Switch>
    </HashRouter>,
    // <Page page="home" />,
    $('div').get(0));