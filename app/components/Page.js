const React = require('react');
const { Nav } = require('./Nav');
const { Footer } = require('./Footer');

export class Page extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <section>
                        <h1>{this.props.header}</h1>
                        <Nav />
                    </section>
                </header>
                {this.props.children}

                <Footer />
            </div>
        );
    }
}