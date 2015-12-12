import React, { Component, PropTypes } from 'react';

/*** Components ***/
import Board from './Board';
import Settings from './Settings';

/*** AI ***/
import compTurn  from '../utils/compTurn';
import boardFull from '../utils/AI/boardFull';

export default class Main extends Component {

    static propTypes = {
        gameBoard: PropTypes.object.isRequired,
        settings: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    constructor(props, context) {
        super(props, context);

    }

    placeMarker(event) {
        const { gameBoard, actions, settings } = this.props;
        const { id: square } = event.target;
        const { user, comp} = settings;



        actions.addMarker(square, user);
        actions.toggleCompTurn();

        // I am passing in an object because that is easiery for now to convert
        // since the store was an objectt after calling .getState()
    }


    componentDidUpdate() {
        const { gameBoard, actions, settings, compCanPlay } = this.props;
        if (boardFull(gameBoard)) {
            console.log('game over need to check if winner');
            actions.clearBoard();
        }

        if(compCanPlay) {
            let square = compTurn(gameBoard, settings.comp);
            actions.addMarker(square, settings.comp);
            // have to toggle ONLY when the comp has finished a turn. If this
            // is outside like when it was just setting to false then I get an
            // infinite loop of toggling
            actions.toggleCompTurn();
        }
    }


    render() {
        const { gameBoard, actions, settings, compCanPlay } = this.props;
        return (
            <div className="col span_3_of_3">
                <header>
                  <h1>Tic Tac Toe</h1>
                </header>
                {/*Can pass the spread version of the state to the component and get all props from it that way in Board.*/}
                <Settings settings={settings} actions={actions} />
                <Board placeMarker={this.placeMarker.bind(this)} gameBoard={gameBoard}/>
                <div className="board-results col span_1_of_3">

                </div>

            </div>
        );
    }
}

