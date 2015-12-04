import React, { Component } from 'react';

/*** Components ***/
import Board from './components/Board';
/*** actions ***/
import userMarker from './actions/userMarker';

class Main extends Component {
    constructor(props) {
        super(props);
        this.store = props.store
    }

    placeMarker(event) {
        const { id: square } = event.target
        const { store } = this;

        ;
        store.dispatch(userMarker(square))
        // compTurn();
    }

    render() {
        const { ticTacGame, settings } = this.store.getState();

        return (
            <div className="container">
                <header>
                  <h1>Tic Tac Toe</h1>
                </header>

                <Board placeMarker={this.placeMarker.bind(this)} gameBoard={ticTacGame} />


            </div>
        );
    }
}

export default Main;