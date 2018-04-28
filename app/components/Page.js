import { Experiences, Projects } from './Experience';
const React = require('react');

const { Card } = require('./Card');
const { Contact } = require('./Contact');
const { Welcome } = require('./Welcome');
const { Nav } = require('./Nav');
const { Experience } = require('./Experience');
const { Footer } = require('./Footer');
const styles = {
    h1: {
        color: '#333',
        background: '#ddd'
    }
}

const experiences = require('../experiences.json');
const projects = require('../projects.json');

export class Page extends React.Component {

    arrayToListItems(a) {
        a.map(e => <li>{e}</li>)
    }

    home() {
        function arrayToListItems(id, aName = false) {
            const aref = aName ? aName : id;
            return (<li key={aref.toString()}><a href={__dirname + '#/' + aref}>{id[0].toUpperCase() + id.slice(1).toLowerCase()}</a></li>)
        }
        return (
            <div>
                <Welcome />

                <section><Card>
                    <h4>Wanna know more?</h4>
                    <h5>Find out more about my</h5>
                    <ul>
                        {['experiences', 'projects'].map(s => arrayToListItems(s))}
                    </ul>
                </Card></section>

                <Footer />
            </div >
        );
    }

    experiences() {
        var expStyle = {
            width: '40%',
        }
        return (
            <div>
                <header>
                    <section>
                        <h1>Experiences</h1>
                        <Nav />
                    </section>
                </header>

                <section id='experiences'>
                    <Experiences experiences={experiences} />
                </section>

                <Footer />
            </div>
        );
    }

    projects() {
        return (
            <div>
                <header>
                    <section>
                        <h1>Projects</h1>
                        <Nav />
                    </section>
                </header>

                <section id='Projects'>
                    <Projects projects={projects} />
                </section>

                <Footer />
            </div>
        );
    }

    render() {
        switch (this.props.page) {
            case 'home': return this.home();
            case 'experiences': return this.experiences();
            case 'projects': return this.projects();
        }
    }

}