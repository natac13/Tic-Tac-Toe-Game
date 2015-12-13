import React, { Component, PropTypes } from 'react';

import ResultMessage from './ResultMessage';

import findResults from '../utils/AI/helpers/findResults';
import boardFull   from '../utils/AI/boardFull';

export default class Results extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        gameBoard: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps() {
        const { gameBoard, actions } = this.props;
        const result = findResults(gameBoard); // winner or false
        if (result === 'X' && !boardFull(gameBoard)) {
            actions.XWin();
        }
        if (result === 'O' && !boardFull(gameBoard)) {
            actions.OWin();
        }

        if (!result && boardFull(gameBoard)) {
            actions.tie();
        }
    }

    render() {
        const { actions, results } = this.props;
        const { x, o, tie } = results
        return (
            <div className="col span_1_of_3 results">
                <div className="restart" onClick={actions.clearBoard}>Restart Game?</div>
                <ResultMessage message='X WIN' value={x} />
                <ResultMessage message='O WIN' value={o} />
                <ResultMessage message='Tie' value={tie} />
            </div>
        );
    }
}