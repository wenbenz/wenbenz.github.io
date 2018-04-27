import { Experiences, Projects } from './Experience';

const React = require('react');
const { Card } = require('./Card');
const { Contact } = require('./Contact');
const { Welcome } = require('./Welcome');
const { Nav } = require('./Nav');
const { Experience } = require('./Experience');
const { Footer } = require('./Footer');
const styles = {
    h1: {
        color: '#333',
        background: '#ddd'
    }
}

const experiences = [
    {
        company: "Imagine Communications",
        logo: "img/imagine.png",
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
    {
        company: "Asia Palace Restaurant",
        logo: "img/asiapalace.jpg",
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
]

const projects = [
    {
        name: "Hangman AI",
        points: [
            "Created a hangman game using AngularJS which stored a database of words entered as words to guess.",
            "Developed an algorithm to determine the most likely letter to appear based on length of given word, letter frequency, and word use frequency.",
            "Bot undefeatable with greater - than - 3 letter words after populating database with 20K words."
        ]
    },
    {
        name: "NotePadd",
        link: "https://notepadd.herokuapp.com/",
        points: [
            "Developed a web - based application by implementing JavaScript to parse English text.",
            "Created a detailed plan by dividing and assigning tasks in manageable chunks.",
            "Created musical rhythms and flows by analyzing and interpreting sentences and word lengths.",
            "Mapped notes to syllables in iambic pentameter to create musical melodies.",
            "Designed and fabricated an intuitive, functional, and visually appealing user interface using Materialize CSS."
        ]
    },
    {
        name: "WatRGoose",
        link: "https://play.google.com/store/apps/details?id=com.wenbinzhao.localhax",
        points: [
            "Developed and published an Android application with a small team in the time span of 12 hours, being the only team to demo a project.",
            "Collaboratively learned to use the Android Studio IDE and set up testing devices.",
            "Kept a lighthearted and enthusiastic atmosphere in the team.",
            "Experienced the process of publishing, updating, and fixing bugs across multiple devices."
        ]
    },
    {
        name: "Robotics Team",
        points: [
            "Designed a robot through collaboration with a team of young engineers.",
            "Won award for best chassis by excellent use of CAD.",
            "Fabricated robot and controls using Arduino."
        ]
    },
    {
        name: "SHAD Entrepreneurship Cup",
        points: [
            "Collaboratively invented an innovative product to solve a novel societal problem.",
            "Pitched product to a panel of seasoned professionals and entrepreneurs.",
            "Created a business plan outlining the future growth of the company.",
            "Prototype and presented a sample product.",
            "Won first place for product and pitch in our region."
        ]
    }
]

export class Page extends React.Component {

    arrayToListItems(a) {
        a.map(e => <li>{e}</li>)
    }

    home() {
        function arrayToListItems(id, aName = false) {
            const aref = aName ? aName : id;
            return (<li key={aref.toString()}><a href={__dirname + '#/' + aref}>{id[0].toUpperCase() + id.slice(1).toLowerCase()}</a></li>)
        }
        return (
            <div>
                <Welcome />

                <section><Card>
                    <h4>Wanna know more?</h4>
                    <h5>Find out more about my</h5>
                    <ul>
                        {['experiences', 'projects'].map(s => arrayToListItems(s))}
                    </ul>
                </Card></section>

                <Footer />
            </div >
        );
    }

    experiences() {
        var expStyle = {
            width: '40%',
        }
        return (
            <div>
                <header>
                    <section>
                        <h1>Experiences</h1>
                        <Nav />
                    </section>
                </header>

                <section id='experiences'>
                    <Experiences experiences={experiences} />
                </section>

                <Footer />
            </div>
        );
    }

    projects() {
        return (
            <div>
                <header>
                    <section>
                        <h1>Projects</h1>
                        <Nav />
                    </section>
                </header>

                <section id='Projects'>
                    <Projects projects={projects} />
                </section>

                <Footer />
            </div>
        );
    }

    render() {
        switch (this.props.page) {
            case 'home': return this.home();
            case 'experiences': return this.experiences();
            case 'projects': return this.projects();
        }
    }

}