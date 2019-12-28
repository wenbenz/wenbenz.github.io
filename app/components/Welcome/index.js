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
                        <p>
                            I'm Ben, a Computer Science co-op student at the University of Waterloo. I'm currently in my 4A term seeking employment for the spring term (May to August 2020). You can find my resume <a href="files/resume.pdf">here</a>.
                        </p>

                        <h4>What can I do?</h4>
                        <p>
                            Throughout my academic and professional career, I have gained experience working with a plethora of different languages, frameworks, paradigms, and technologies. Consequently, I can work in any modern development environment. I'm capable of quickly adapting and learning new technologies to work with your company's existing code and tackling any challenges.
                        </p>

                        <h4>So what am I like?</h4>
                        <p>
                            I would describe myself as an active and sociable person. In my free time I dance, rock climb, hike, swim, and skate. I also enjoy boardgames, Dungeons and Dragons, and generally hanging out with people. I’m an open-minded individual and I love trying new things :)
                        </p>
                    </Card>
                    <Card>
                        <h4>Send me a message!</h4>
                        <p>You can reach me at </p>
                        <ul>
                            <li>
                                <Contact type='phone' value='639-997-ZHAO (639-997-9426)' /></li>
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