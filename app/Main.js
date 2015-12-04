import React, { Component } from 'react';
import Square from './components/Square';

class Main extends Component {
    constructor(props) {
        super(props);
        this.store = props.store
    }

    placeMarker(event) {
        const { id: square } = event.target
        const { store } = this;
        // console.log(JSON.stringify(store.getState(), null, 4));
        const action = {
                type: 'PLACE_USER_MARKER',
                square: square,
                marker: 'X'
            };
        store.dispatch(action)
        // compTurn();
    }

    render() {
        const { ticTacGame, settings } = this.store.getState();

        return (
            <div className="container">
                <header>
                  <h1>Tic Tac Toe</h1>
                </header>
                <div className="board">
                    <div className="row">
                        <Square placeMarker={this.placeMarker.bind(this)} square={'a1'} marker={ticTacGame.a1}/>
                        <Square placeMarker={this.placeMarker.bind(this)} square={'a2'} marker={ticTacGame.a2}/>
                        <Square placeMarker={this.placeMarker.bind(this)} square={'a3'} marker={ticTacGame.a3}/>
                    </div>
                    <div className="row">
                        <Square placeMarker={this.placeMarker.bind(this)} square={'b1'} marker={ticTacGame.b1}/>
                        <Square placeMarker={this.placeMarker.bind(this)} square={'b2'} marker={ticTacGame.b2}/>
                        <Square placeMarker={this.placeMarker.bind(this)} square={'b3'} marker={ticTacGame.b3}/>
                    </div>
                    <div className="row">
                        <Square placeMarker={this.placeMarker.bind(this)} square={'c1'} marker={ticTacGame.c1}/>
                        <Square placeMarker={this.placeMarker.bind(this)} square={'c2'} marker={ticTacGame.c2}/>
                        <Square placeMarker={this.placeMarker.bind(this)} square={'c3'} marker={ticTacGame.c3}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;