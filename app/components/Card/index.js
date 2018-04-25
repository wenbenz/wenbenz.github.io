const React = require('react');
import './style.scss'
export class Card extends React.Component {
    render() {
        return (
            <div component='card'>
                {this.props.img &&
                    (
                        <div className='imgBox' style={this.props.imgStyle}>
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