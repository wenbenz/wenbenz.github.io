const React = require('react');

export class Nav extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <a href="https://www.github.com/wenbenz">Github</a>
                </li>
                <li>
                    <a href="https://ca.linkedin.com/in/wenbinzhao">LinkedIn</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="files/resume.pdf">Resume</a>
                </li>
            </ul>

        );
    }
}