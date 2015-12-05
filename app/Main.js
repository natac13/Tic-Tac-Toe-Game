import React, { Component } from 'react';

/*** Components ***/
import Board from './components/Board';

/*** actions ***/
import addUserMarker from './actions/addUserMarker';

/*** AI ***/
import compTurn from './utils/compTurn';

class Main extends Component {
    constructor(props) {
        super(props);
        this.store = props.store
    }

    placeMarker(event) {
        const { id: square } = event.target
        const { store } = this;
        console.log(store.getState().settings);
        const { user: userMarker } = store.getState().settings

        ;
        store.dispatch(addUserMarker(square, userMarker))
        compTurn(store);
    }

    componentDidMount() {

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