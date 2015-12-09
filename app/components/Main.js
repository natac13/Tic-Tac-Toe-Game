import React, { Component } from 'react';

/*** Components ***/
import Board from './Board';

/*** actions ***/
import { addUserMarker } from '../actions/board';

/*** AI ***/
import compTurn from '../utils/compTurn';

class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }

    placeMarker(event) {
        const { gameBoard, actions, settings } = this.props;
        const { id: square } = event.target
        const { user: userMarker } = settings

        ;
        actions.addUserMarker(square, userMarker);
        // I am passing in an object because that is easiery for now to convert
        // since the store was an objectt after calling .getState()
        compTurn({gameBoard, actions, settings});
    }

    componentDidMount() {

    }

    render() {
        const { gameBoard, settings } = this.props;
        return (
            <div className="col span_3_of_3">
                <header>
                  <h1>Tic Tac Toe</h1>
                </header>
                {/*Can pass the spread version of the state to the component and get all props from it that way in Board.*/}
                <Board placeMarker={this.placeMarker.bind(this)} gameBoard={gameBoard} settings={settings}/>


            </div>
        );
    }
}

export default Main;