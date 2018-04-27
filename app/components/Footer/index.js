const React = require('react');

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="iconLinks">
                    <a href="https://github.com/wenbenz">
                        <i className="fab fa-github fa-3x" aria-hidden="true"></i>
                    </a>
                    <a href="https://ca.linkedin.com/in/wenbinzhao">
                        <i className="fab fa-linkedin fa-3x" aria-hidden="true"></i>
                    </a>
                    <a href="files/resume.pdf">
                        <i className="fas fa-file fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <hr />
                <div>
                    © Wenbin Zhao 2018, All rights reserved.
                </div>
            </footer>
        );
    }
}