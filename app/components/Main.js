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
        actions: PropTypes.object.isRequired
    }

    constructor(props, context) {
        super(props, context);
        /*
        Had to the score keeping this way since I kept getting infinite loops
        with the component updating and calling a dispatch which is bound to
        this.setState() which re-renders the component which causes the loop.
         */
        this.results = {
            x: 0,
            o: 0,
            tie: 0
        }

    }

    placeMarker(event) {
        const { gameBoard, actions, settings } = this.props;
        const { id: square } = event.target;
        const { user, comp} = settings;



        actions.addMarker(square, user);
        actions.setCompTurn();

    }

    componentWillUpdate() {
        const { gameBoard, actions, settings, compCanPlay } = this.props;

        /*** the board is full so must be a tie ***/
        if (boardFull(gameBoard)) {
            actions.clearBoard();
        }

    }

    componentDidUpdate() {
        const { gameBoard, actions, settings, compCanPlay } = this.props;
        /** found a winning match  **/
        if (!!findResults(gameBoard)) {
            if(findResults(gameBoard) === 'X') {
                this.results.x += 1;
                setTimeout(actions.clearBoard, 800);
            }
            if(findResults(gameBoard) === 'O') {
                this.results.o += 1;
                setTimeout(actions.clearBoard, 800);
            }
        }
        /*** board full without winning match  ***/
        if (boardFull(gameBoard) && !findResults(gameBoard)) {
            this.results.tie += 1;
            setTimeout(actions.clearBoard, 800);
        }
        /*** normal computer turn ***/
        if(compCanPlay && !findResults(gameBoard)) {
            let square = compTurn(gameBoard, settings.comp);
            actions.setUserTurn();
            actions.addMarker(square, settings.comp);
            // have to toggle ONLY when the comp has finished a turn. If this
            // infinite loop of toggling
            // is outside like when it was just setting to false then I get an
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
                <Results clear={actions.clearBoard} results={this.results}/>
            </div>
        );
    }
}

