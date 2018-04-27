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
        if (this.props.page == 'home')
            return this.home();
    }
    home() {
        var expStyle = {
            width: '40%',
        }
        function listAnchor(id, aName = false) {
            const aref = aName ? aName : id;
            return (<li key={aref.toString()}><a href={aref}>{id[0].toUpperCase() + id.slice(1).toLowerCase()}</a></li>)
        }
        return (
            <div>
                <Welcome />

                <section><Card>
                    <h4>Wanna know more?</h4>
                    <h5>Find out more about my</h5>
                    <ul>
                        {['experiences', 'projects'].map(s => listAnchor(s))}
                    </ul>
                </Card></section>

                {/* <section id='experiences'>
                    <h2>Experiences</h2>
                    <Card img="img/imagine.png" imgStyle={expStyle}>
                        <Experience experience={experiences.Imagine} />
                    </Card>
                    <Card img="img/asiapalace.jpg" imgStyle={expStyle}>
                        <Experience experience={experiences["Asia Palace"]} />
                    </Card>
                </section> */}


                <Footer />
            </div >
        );
    }
}