import React, { Component } from 'react';

/*** Components ***/
import Board from './components/Board';

/*** actions ***/
import { addUserMarker } from './actions/board';

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
            <div className="col span_3_of_3">
                <header>
                  <h1>Tic Tac Toe</h1>
                </header>
                {/*Can pass the spread version of the state to the component and get all props from it that way in Board.*/}
                <Board placeMarker={this.placeMarker.bind(this)} gameBoard={ticTacGame} {...this.store.getState()}/>


            </div>
        );
    }
}

export default Main;