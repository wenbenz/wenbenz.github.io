const React = require('react');
const { Picture } = require('../Picture');
const { Nav } = require('../Nav');
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
                        <Nav />
                    </div>
                </div>
                <br />
                <section>
                    <Card style={{ textAlign: "left", background: "#374349" }}>
                        <h4>Hi!</h4>
                        <p>I'm Ben. I'm a Computer Science student at the University of Waterloo enrolled in the co-op program. My passion lies in software development and problem solving, but I also love exploring new environments, meeting new and interesting people, and enjoy performing arts! In my free time, I enjoy dancing, building side projects, and trying new things with friends. Professionally, I am looking for new experiences and opportunities to learn in different industries. I am looking for a co-operative work term placement for Winter 2019 (January to April).</p>
                    </Card>
                    <Card style={{ textAlign: "left", background: "#374349" }}>
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