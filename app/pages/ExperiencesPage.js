const React = require('react');

const { Page } = require('../components/Page');
const { Card } = require('../components/Card');
const { Nav } = require('../components/Nav');
const { Experiences } = require('../components/Experience');

const experiences = require('../experiences.json');

export class ExperiencesPage extends React.Component {
    render() {
        return (
            <Page header='Experiences'>
                <section id='experiences'>
                    <Experiences experiences={experiences} />
                </section>
            </Page>
        );
    }
}