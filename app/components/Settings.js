import React, { Component, PropTypes } from 'react';

import boardDirty from '../utils/AI/boardDirty';
import classnames from 'classnames';
import { markerClass } from '../utils/classHelpers';


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
        console.log(marker)
        this.props.actions.setUserMarker(marker);
        console.log(this.props);
    }



    render() {
        const { gameBoard, settings, actions } = this.props;
        const settingsClass = classnames({
            col: true,
            span_1_of_3: true,
            settings: true,
            active: boardDirty(gameBoard)
        });

        const markerClassX = markerClass('X');
        const markerClassO = markerClass('O');

        return (
            <div className={settingsClass}>
                <h3 > Which Marker would you like to be? </h3>
                <button className={markerClassO(settings.user)} onClick={this.become.bind(this)} value="O"> Become 'O'</button>
                <button className={markerClassX(settings.user)} onClick={this.become.bind(this)} value="X"> Become 'X'</button>
            </div>
        );
    }
}