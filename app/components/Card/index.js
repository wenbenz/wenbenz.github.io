const React = require('react');
const { Styles } = require('./style.scss');
export class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                {this.props.img &&
                    (
                        <div className='img' style={this.props.imgStyle}>
                            <img src={this.props.img} />
                        </div>
                    )
                }
                <div>
                    {this.props.children}

                </div>
            </div>
        );
    }
}