import React, { Component, PropTypes } from 'react';

/*** Components ***/
import Board    from './Board';
import Settings from './Settings';
import Results  from './Results';

/*** AI ***/
import compTurn  from '../utils/compTurn';
import boardFull from '../utils/AI/boardFull';
import findResults from '../utils/AI/helpers/findResults';

export default class Main extends Component {

    static propTypes = {
        gameBoard: PropTypes.object.isRequired,
        settings: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
        compCanPlay: PropTypes.bool.isRequired,
        results: PropTypes.object.isRequired
    }

    constructor(props, context) {
        super(props, context);
    }

    placeMarker(event) {
        const { gameBoard, actions, settings } = this.props;
        const { id: square } = event.target;
        const { user, comp} = settings;



        actions.addMarker(square, user);
        actions.setCompTurn();

    }


    componentDidUpdate() {
        const { gameBoard, actions, settings, compCanPlay } = this.props;
        /***
        I set it back to the user turn as soon as the component updates or,
        as soon as there is a change to the state; a marker is placed on the gameBoard
        either user or comp.
        This was to prevent the comp from playing first after a tie game. Since
        the flag was originally after the compturn() call
        ***/
        actions.setUserTurn();
        /** found a winning match  **/
        if (!!findResults(gameBoard)) {
            setTimeout(actions.clearBoard, 800);
        }

        /*** board full without winning match  ***/
        if (boardFull(gameBoard) && !findResults(gameBoard)) {
            // if I delay the call then the Results component calls the tie action
            // twice...
            actions.clearBoard();
        }
        /*** normal computer turn ***/
        if(compCanPlay && !findResults(gameBoard) && !boardFull(gameBoard)) {
            let square = compTurn(gameBoard, settings.comp);
            actions.addMarker(square, settings.comp);
        }
    }


    render() {
        const { gameBoard, actions, settings, compCanPlay, results } = this.props;
        return (
            <div className="col span_3_of_3">
                <header>
                  <h1>Natac's Tic Tac Toe</h1>
                  <a
                    href="https://github.com/natac13/Tic-Tac-Toe-Game"
                    target="_blank"
                    title="Github Repo">
                    Source Code
                </a>
                </header>
                {/*Can pass the spread version of the state to the component and get all props from it that way in Board.*/}
                <Settings {...this.props} />
                <Board placeMarker={this.placeMarker.bind(this)} gameBoard={gameBoard}/>
                <Results results={results} gameBoard={gameBoard} actions={actions}/>
            </div>
        );
    }
}

