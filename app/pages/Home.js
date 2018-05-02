const React = require('react');
const jsx = require('../jsxToolkit');

const { Card } = require('../components/Card');
const { Contact } = require('../components/Contact');
const { Welcome } = require('../components/Welcome');
const { Nav } = require('../components/Nav');
const { Footer } = require('../components/Footer');

export class Home extends React.Component {
    render() {
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
                    <ul onClick={jsx.toTop}>
                        {['experiences', 'projects'].map(s => arrayToListItems(s))}
                    </ul>
                </Card></section>

                <Footer />
            </div >
        );
    }
}