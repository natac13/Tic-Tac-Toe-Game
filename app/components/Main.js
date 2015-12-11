import React, { Component } from 'react';

/*** Components ***/
import Board from './Board';

/*** AI ***/
import compTurn from '../utils/compTurn';

export default class Main extends Component {

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
        if(compCanPlay) {
            let square = compTurn(gameBoard);
            actions.addMarker(square, settings.comp);
            // have to toggle ONLY when the comp has finished a turn. If this
            // is outside like when it was just setting to false then I get an
            // infinite loop of toggling
            actions.toggleCompTurn();
        }
    }


    render() {
        return (
            <div className="col span_3_of_3">
                <header>
                  <h1>Tic Tac Toe</h1>
                </header>
                {/*Can pass the spread version of the state to the component and get all props from it that way in Board.*/}
                <Board placeMarker={this.placeMarker.bind(this)} {...this.props}/>


            </div>
        );
    }
}

