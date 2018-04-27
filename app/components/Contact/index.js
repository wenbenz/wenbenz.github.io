const React = require('react');
const { Styles } = require('./style.scss');
export class Contact extends React.Component {
    render() {
        let value = this.props.value;
        if (this.props.type === 'email')
            value = <a href={'mailto:' + this.props.value}>{this.props.value}</a>;
        return (
            <span className="contact">{this.props.type + ": "}{value}</span>
        );
    }
}