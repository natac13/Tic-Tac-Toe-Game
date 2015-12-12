import React, { Component, PropTypes } from 'react';

export default class Results extends Component {
    static propTypes = {
        clear: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col span_1_of_3 results">
                <div className="restart" onClick={this.props.clear}>Restart Game?</div>
            </div>
        );
    }
}