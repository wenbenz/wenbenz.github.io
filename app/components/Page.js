const React = require('react');
const { Card } = require('./Card');
const { Contact } = require('./Contact');
const { Welcome } = require('./Welcome');
const { Experience } = require('./Experience');
const { Footer } = require('./Footer');
const styles = {
    h1: {
        color: '#333',
        background: '#ddd'
    }
}

export class Page extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <section id='about'>

                    <h2>Bio</h2>

                    <p>Like your typical designer and developer, I enjoy a cup of Java in the morning before I start my day. Coincidentally,
                        this habit began around the same time I was learning Java.</p>

                    <p>I started learning to code when I was 13 out of my own interest, using Visual basic as a stepping stone. It's graphical
                        development environment made it easy to pick up at an early age, as well as functioning as a gateway into design.
                        After discovering my inclination towards design, I learned HTML and CSS from available online and print resources.
                        Over the course of creating, editing, and disecting multiple websites and I've also become comfortable with visual
                        and UI design.</p>

                    <p>Currently I'm in the Computer Science (Coop) program in the University of Waterloo. In my free time, I like to get
                        active, explore my surrounding environment with friends, try new experiences, and learn about subjects of personal
                        interest. I also enjoy hackathons.</p>

                    <p>Professionally, I am open to new experiences and opportunities to learn in the industry. I am looking for a coop
                        placement for the Fall 2017 (September to December) term.</p>
                </section>

                <section id='experience'>
                    <h2>Experience</h2>
                    <Card img="img/imagine.png" imgStyle={{ width: "30%", height: "auto" }}>
                        <Experience
                            title="Imagine Communications"
                            position="Full Stack Developer"
                            startDate="Sept. 2017"
                            endDate="Dec. 2017"
                            points={["a", "b", "c"]}
                        />
                    </Card>
                </section>

                <section id='contact'>
                    <h2>Contact</h2>
                    <Card img="img/contact.jpg" imgStyle={{ width: "auto", height: "100%" }}>
                        <img className="calligSpaceFill" src="img/callig.svg" title="Calligraphy Space Filler by EezyPremium" />
                        <hr />
                        <h4>Ben Zhao</h4>
                        <ul>
                            <li>
                                <Contact type='phone' value='306-737-2773' /></li>
                            <li>
                                <Contact type='email' value='ben@wenbinzhao.com' />
                            </li>
                        </ul>
                        <hr />
                        <img className="calligSpaceFillFlip" src="img/callig.svg" />
                    </Card>
                </section>
                <Footer />
            </div>
        );
    }
}