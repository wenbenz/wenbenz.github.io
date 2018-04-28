const React = require('react');
import './style.scss';

const { Picture } = require('../Picture');
const { Card } = require('../Card');
const { Contact } = require('../Contact');

export class Welcome extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <Picture />
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
                                <a href="files/resume.pdf">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <br />
                <section>
                    <Card>
                        <h4>Hi!</h4>
                        <p>I'm Ben. I'm a Computer Science student at the University of Waterloo enrolled in the co-op program. My passion lies in software development and problem solving, but I also love exploring new environments, meeting new and interesting people, and enjoy performing arts! In my free time, I like to dance, build side projects, and try new things with friends. Professionally, I am looking for new experiences and opportunities to learn in different industries. I am looking for a co-operative work term placement for Winter 2019 (January to April).</p>
                    </Card>
                    <Card>
                        <h4>Send me a message!</h4>
                        <p>You can reach me at </p>
                        <ul>
                            <li>
                                <Contact type='phone' value='306-737-2773' /></li>
                            <li>
                                <Contact type='email' value='ben@wenbinzhao.com' />
                            </li>
                        </ul>
                    </Card>
                </section>
            </header >
        );
    }
}