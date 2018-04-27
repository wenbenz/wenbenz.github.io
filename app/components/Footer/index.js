const React = require('react');
const { IconBar } = require('../IconBar');

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <IconBar />
                <hr />
                <div>
                    © Wenbin Zhao 2018, All rights reserved.
                </div>
            </footer>
        );
    }
}