const React = require('react');

const { Page } = require('../components/Page');
const { Card } = require('../components/Card');
const { Nav } = require('../components/Nav');
const { Projects } = require('../components/Experience');

const projects = require('./projects.json');

export class ProjectsPage extends React.Component {
    render() {
        return (
            <Page header="Projects">
                <section id='Projects'>
                    <Projects projects={projects} />
                </section>
            </Page>
        );
    }
}