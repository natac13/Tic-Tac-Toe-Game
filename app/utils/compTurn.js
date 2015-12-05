import _ from 'lodash';

import addCompMarker from '../actions/addCompMarker';

/*** ai functions ***/
import blockAnyTwo from './blockAnyTwo';


const cornorsEmpty = (store) => {
    let { ticTacGame: board, settings }= store.getState();
    const cornors = ['a1', 'a3', 'c1', 'c3'];
        if (cornors.every(square =>  board[square] === '')) {
            store.dispatch(addCompMarker('a1', settings.comp));
        }

}

const boardFull = (board) => {
    return _.every(board, function(value) {
        return value !== '';
    });
}






const compTurn = (store) => {
    const { ticTacGame: gameBoard, settings } = store.getState();
    const edges = ['a2', 'b1', 'b3', 'c2'];




    blockAnyTwo(store);
    cornorsEmpty(store);






}

export default compTurn;