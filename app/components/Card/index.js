const React = require('react');
export class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='img'>
                    <img src="img/contact.jpg" />
                </div>
                <div>
                    <img className="calligSpaceFill" src="img/callig.svg" title="Calligraphy Space Filler by EezyPremium" />
                    <hr />
                    <h4>Ben Zhao</h4>
                    <ul>
                        <li>
                            <b>Phone:</b> 306-737-2773</li>
                        <li>
                            <b>Email:</b>
                            <a href="mailto:ben@wenbinzhao.com">ben@wenbinzhao.com</a>
                        </li>
                    </ul>
                    <hr />
                    <img className="calligSpaceFillFlip" src="img/callig.svg" />
                </div>
            </div>
        );
    }
}