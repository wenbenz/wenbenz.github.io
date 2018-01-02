const React = require('react');
const { Card } = require('./Card')
const styles = {
    h1: {
        color: '#333',
        background: '#ddd'
    }
}

export class Page extends React.Component {
    render() {
        return (<Card />);
    }
}