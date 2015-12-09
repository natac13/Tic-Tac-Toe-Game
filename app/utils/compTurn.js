import _ from 'lodash';

/*** actions ***/
// import addCompMarker from '../actions/addCompMarker';
import { addCompMarker } from '../actions/game';

/*** ai functions ***/
import completeAnyTwo from './AI/completeAnyTwo';
import blockAnyTwo    from './AI/blockAnyTwo';
import boardFull      from './AI/boardFull';


const cornorsEmpty = (gameBoard, actions, marker) => {
    const cornors = ['a1', 'a3', 'c1', 'c3'];
        if (cornors.every(square =>  gameBoard[square] === '')) {
           actions.addCompMarker('a1', marker);
            return true
        } else {
            return false;
        }

}


const takeCenterWhenEmpty = (store) => {
    let { ticTacGame: gameBoard, settings }= store.getState();
    if(gameBoard.b2 === '') {
        store.dispatch(addCompMarker('b2', settings.comp))
    }
}



const compTurn = (gameBoard, actions, marker) => {
    const edges = ['a2', 'b1', 'b3', 'c2'];

//// need to work on this part since comp can mark multiple moves


    if (completeAnyTwo(gameBoard, actions, marker) ||
        blockAnyTwo(gameBoard, actions, marker) ||
        cornorsEmpty(gameBoard, actions, marker)) { console.log('your turn')}
    if (boardFull(gameBoard)) { console.log('Full board game over'); }








}

export default compTurn;