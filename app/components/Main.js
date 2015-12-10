import React, { Component } from 'react';

/*** Components ***/
import Board from './Board';

/*** AI ***/
import compTurn from '../utils/compTurn';

class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.canPlay = false;
    }

    placeMarker(event) {
        const { gameBoard, actions, settings } = this.props;
        const { id: square } = event.target;
        const { user, comp} = settings;



        actions.addUserMarker(square, user);
        this.canPlay = true;

        // I am passing in an object because that is easiery for now to convert
        // since the store was an objectt after calling .getState()
    }

    componentDidUpdate() {
        const { gameBoard, actions, settings } = this.props;
        console.log(gameBoard);
        if(this.canPlay) {
            let square = compTurn(gameBoard, actions, settings.comp);
            actions.addCompMarker(square, settings.comp);
        }
        this.canPlay = false;
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

export default Main;