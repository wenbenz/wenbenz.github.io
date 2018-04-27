const React = require('react');
import './style.scss';
export class Experience extends React.Component {
    arrayToList(array) {
        return array.map((a, i) => <li key={i}>{a}</li>);
    }
    render() {
        let exp = this.props.experience;
        return (
            <div>
                <h4><b>{exp.title}</b>{(exp.position ? "-" + exp.position : "")}</h4>
                <span className='date'>{exp.startDate + "-" + (exp.endDate || "Present")}</span>
                <ul className="experienceList">
                    {this.arrayToList(exp.points)}
                </ul>
            </div>
        )
    }
}