const React = require('react');
const { Card } = require('./Card');
const { Welcome } = require('./Welcome');
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

                    <h2>#include Bio</h2>

                    <p>That didn't work--I guess I'll have to write this. Like your typical designer and developer, I enjoy a cup of Java in
      the morning before I start my day. Coincidentally, this habit began around the same time I was learning Java.</p>

                    <p>I started learning to code when I was 13 out of my own interest, using Visual basic as a stepping stone. It's graphical
      development environment made it easy to pick up at an early age, as well as functioning as a gateway into design. After
      discovering my inclination towards design, I learned HTML and CSS from available online and print resources. Over the
      course of creating, editing, and disecting multiple websites and I've also become comfortable with visual and UI design.</p>

                    <p>Currently I'm in the Computer Science (Coop) program in the University of Waterloo. In my free time, I like to get active,
      explore my surrounding environment with friends, try new experiences, and learn about subjects of personal interest.
      I also enjoy hackathons.</p>

                    <p>Professionally, I am open to new experiences and opportunities to learn in the industry. I am looking for a coop placement
      for the Fall 2017 (September to December) term.</p>

                </section>

                <section id='contact'>
                    <h2>#include Contact</h2>
                    <Card />
                </section>
                <Footer />
            </div>
        );
    }
}