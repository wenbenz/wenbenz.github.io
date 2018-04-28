const React = require('react');
const jsx = require('./../../jsxToolkit');
const { Card } = require('./../Card')
import './style.scss';

export class Experience extends React.Component {
    /**
     * A work experience has the following properties:
     *  company
     *  position?
     *  logo?
     *  start date
     *  end date? (only optional because present)
     *  points
     */
    render() {
        const exp = this.props.experience;
        return (
            <div>
                <h4><b>{this.props.company}</b>{(this.props.position ? "-" + this.props.position : "")}</h4>
                <span className='date'>{this.props.startDate + "-" + (this.props.endDate || "Present")}</span>
                <ul>
                    {jsx.arrayToList(this.props.points)}
                </ul>
            </div>
        )
    }
}

export class Experiences extends React.Component {
    render() {
        const exps = [];
        this.props.experiences.forEach((experience, i) =>
            exps.push(
                <Card key={i} img={experience.logo} imgStyle={{ width: '40%' }}>
                    <Experience {...experience} />
                </Card>
            )
        );
        return exps;
    }
}

export class Project extends React.Component {
    /**
     * A project has the following properties:
     *  name
     *  date?
     *  link?
     *  points
     */
    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                {this.props.link && <a href={this.props.link}>(Click here to check it out!)</a>}
                <ul>{jsx.arrayToList(this.props.points)}</ul>
            </div>
        );
    }
}

export class Projects extends React.Component {
    render() {
        const projects = [];
        this.props.projects.forEach((project, i) =>
            projects.push(
                <Card key={i}>
                    <Project {...project} />
                </ Card>
            )
        );
        return projects;
    }
}