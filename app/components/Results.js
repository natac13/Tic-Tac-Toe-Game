import React, { Component, PropTypes } from 'react';

export default class Results extends Component {
    static propTypes = {
        clear: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { x, o, tie } = this.props.results
        return (
            <div className="col span_1_of_3 results">
                <div className="restart" onClick={this.props.clear}>Restart Game?</div>
                <p className="result"> X Wins: <span className="num">{x}</span> </p>
                <p className="result"> O Wins: <span className="num">{o}</span> </p>
                <p className="result"> Ties: <span className="num">{tie}</span> </p>
            </div>
        );
    }
}