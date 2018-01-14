const React = require('react');
export class Experience extends React.Component {
    arrayToList(array) {
        return array.map(a => <li>{a}</li>);
    }
    render() {
        return (
            <div>
                <h4><b>{this.props.title}</b>{(this.props.position ? "-" + this.props.position : "")}</h4>
                <span>{this.props.startDate + "-" + (this.props.endDate || "Present")}</span>
                <ul>
                    {this.arrayToList(this.props.points)}
                </ul>
            </div>
        )
    }
}