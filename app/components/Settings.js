import React, { Component, PropTypes } from 'react';

import boardDirty from '../utils/AI/boardDirty';
import classnames from 'classnames';


export default class Settings extends Component {

    static propTypes = {
        gameBoard: PropTypes.object.isRequired,
        settings: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    become(event) {
        const marker = event.target.value;
        this.props.actions.setUserMarker(marker)
    }


    render() {
        const { gameBoard, settings, actions } = this.props;
        const settingsClass = classnames({
            col: true,
            span_1_of_3: true,
            settings: true,
            active: boardDirty(gameBoard)
        })
        return (
            <div className={settingsClass}>
                <button onClick={this.become.bind(this)} value="O"> Become 'O'</button>
                <button onClick={this.become.bind(this)} value="X"> Become 'X'</button>
            </div>
        );
    }
}