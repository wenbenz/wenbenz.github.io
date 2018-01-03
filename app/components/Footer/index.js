const React = require('react');
export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="iconLinks">
                    <a href="https://github.com/wenbenz">
                        <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                    </a>
                    <a href="https://ca.linkedin.com/in/wenbinzhao">
                        <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                    </a>
                    <a href="files/resume.pdf">
                        <i className="fa fa-file-text fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <hr />
                <div>
                    &copy Wenbin Zhao 2017 all rights reserved.
                </div>
            </footer>
        );
    }
}