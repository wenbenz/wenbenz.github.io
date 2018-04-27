const React = require('react');
const { Styles } = require('./style.scss');

export class Nav extends React.Component {
    render() {
        return (
            < ul className='NavList' style={this.props.style} >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/experiences">Experiences</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/files/resume.pdf">Resume</a>
                </li>
            </ul >

        );
    }
}