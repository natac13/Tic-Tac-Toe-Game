import _ from 'lodash';

/*** actions ***/
import addCompMarker from '../actions/addCompMarker';

/*** ai functions ***/
import completeAnyTwo from './AI/completeAnyTwo';
import blockAnyTwo    from './AI/blockAnyTwo';
import boardFull      from './AI/boardFull';


const cornorsEmpty = (store) => {
    let { ticTacGame: board, settings }= store.getState();
    const cornors = ['a1', 'a3', 'c1', 'c3'];
        if (cornors.every(square =>  board[square] === '')) {
            store.dispatch(addCompMarker('a1', settings.comp));
            return true
        } else {
            return false;
        }

}





const compTurn = (store) => {
    const edges = ['a2', 'b1', 'b3', 'c2'];

//// need to work on this part since comp can mark multiple moves


    if (completeAnyTwo(store) ||
        blockAnyTwo(store) ||
        cornorsEmpty(store)) { console.log('your turn')}
    if (boardFull(store)) { console.log('Full board game over'); }








}

export default compTurn;