const React = require('react');
export class Welcome extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <div className="animationset1">
                        <div className="circle shadow3" id="rings">
                            <div className="circle shadow3">
                                <div>
                                    <div className="circle shadow3" id="cImg">
                                        <img src="img/profile.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="cName">
                        <h1>Ben Zhao</h1>
                        <div className="hBar"></div>
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
                    </div>
                </div>
            </header>
        );
    }
}