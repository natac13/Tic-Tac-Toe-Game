import React, { Component } from 'react';
import _ from 'lodash';

class Game extends Component {
    render() {
        return (
            <div className="btn btn-primary" onClick={this.props.onClick}>

            </div>
        );
    }
}

export default Game;