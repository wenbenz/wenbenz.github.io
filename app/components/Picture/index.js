const React = require('react');

export class Picture extends React.Component {
    render() {
        return (
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
        );
    }
}