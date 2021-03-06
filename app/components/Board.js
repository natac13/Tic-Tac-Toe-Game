import React, { Component, PropTypes } from 'react';

import Square from './Square';


export default class Board extends Component {

    static propTypes = {
        placeMarker: PropTypes.func.isRequired,
        gameBoard: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { placeMarker, gameBoard } = this.props;
        return (
            <div className="board col span_1_of_3">
                <div className="row">
                    <Square placeMarker={placeMarker} square={'a1'} marker={gameBoard.a1}/>
                    <Square placeMarker={placeMarker} square={'a2'} marker={gameBoard.a2}/>
                    <Square placeMarker={placeMarker} square={'a3'} marker={gameBoard.a3}/>
                </div>
                <div className="row">
                    <Square placeMarker={placeMarker} square={'b1'} marker={gameBoard.b1}/>
                    <Square placeMarker={placeMarker} square={'b2'} marker={gameBoard.b2}/>
                    <Square placeMarker={placeMarker} square={'b3'} marker={gameBoard.b3}/>
                </div>
                <div className="row">
                    <Square placeMarker={placeMarker} square={'c1'} marker={gameBoard.c1}/>
                    <Square placeMarker={placeMarker} square={'c2'} marker={gameBoard.c2}/>
                    <Square placeMarker={placeMarker} square={'c3'} marker={gameBoard.c3}/>
                </div>
            </div>
        );
    }
}

