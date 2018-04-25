const React = require('react');
export class Experience extends React.Component {
    arrayToList(array) {
        return array.map(a => <li>{a}</li>);
    }
    render() {
        let exp = this.props.experience;
        return (
            <div>
                <h4><b>{exp.title}</b>{(exp.position ? "-" + exp.position : "")}</h4>
                <span>{exp.startDate + "-" + (exp.endDate || "Present")}</span>
                <ul>
                    {this.arrayToList(exp.points)}
                </ul>
            </div>
        )
    }
}