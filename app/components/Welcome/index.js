const React = require('react');
const { Picture } = require('../Picture');
const { Nav } = require('../Nav');

export class Welcome extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <Picture />
                    <div id="cName">
                        <h1>Ben Zhao</h1>
                        <div className="hBar"></div>
                        <Nav />
                    </div>
                </div>
            </header>
        );
    }
}