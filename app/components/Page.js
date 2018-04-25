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

const experiences = {
    "Imagine": {
        title: "Imagine Communications",
        position: "Full Stack Developer",
        startDate: "September 2017",
        endDate: "December 2017",
        points: [
            "Changed code to be asynchronous to increase responsiveness of UI by 800%.",
            "Implemented UI features to impress and secure a major clientele in demo.",
            "Created a new service to address a class of bugs and prevent future ones.",
            "Developed reusable and customizable components to accelerate UI development and create uniformity and cohesion.",
            "Automated stylesheet generation for icons using Node.JS to enable exporting company icons as a reusable package"
        ]
    },
    "Asia Palace": {
        title: "Asia Palace Restaurant",
        position: "IT and Manager",
        startDate: "January 2016",
        endDate: "September 2016",
        points: [
            " Programmed and installed a point-of-sale system to save company over $2000 and to provide more efficient service and analytics.",
            "Exercised strong communication and organization skills to optimize daily operations and mediate conflicts.",
            "Provided excellent service to establish the “best[Chinese restaurant] in Regina”.",
            "Maintained company image by providing excellent customer care.",
            "Designing and printing menus and other media, advertising, and maintained presence in social media.",
            "Obtained necessary permits for the establishment of the restaurant."
        ]
    }
}

export class Page extends React.Component {
    render() {
        var expStyle = {
            width: '40%',
        }
        function listAnchor(id, aName = false) {
            const aref = aName ? aName : id;
            console.log(aref, aName, id)
            return (<li><a href={'#' + aref}>{id[0].toUpperCase() + id.slice(1).toLowerCase()}</a></li>)
        }
        return (
            <div>
                <Welcome />

                <section><Card>
                    <h4>Looking for something?</h4>
                    <h5>What about...</h5>
                    <ul>
                        {listAnchor('bio', 'about')}
                        {['experiences', 'contact'].map(s => listAnchor(s))}
                    </ul>
                </Card></section>

                <section id='about'>

                    <Card>
                        <h4>Bio</h4>

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

                        <p>Professionally, I am looking new experiences and opportunities to learn in different industries. I am looking for a coop placement for the Winter 2019 (January to April) term.</p>
                    </Card>
                </section>

                <section id='experiences'>
                    <h2>Experiences</h2>
                    <Card img="img/imagine.png" imgStyle={expStyle}>
                        <Experience experience={experiences.Imagine} />
                    </Card>
                    <Card img="img/asiapalace.jpg" imgStyle={expStyle}>
                        <Experience experience={experiences["Asia Palace"]} />
                    </Card>
                </section>

                <section id='contact'>
                    <h2>Contact</h2>
                    <Card img="img/contact.jpg" imgStyle={{ width: "auto", height: "100%" }}>
                        {/* <img className="calligSpaceFill" src="img/callig.svg" title="Calligraphy Space Filler by EezyPremium" /> */}
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
                        {/* <img className="calligSpaceFillFlip" src="img/callig.svg" /> */}
                    </Card>
                </section>
                <Footer />
            </div >
        );
    }
}