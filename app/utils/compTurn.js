import _ from 'lodash';

/*** actions ***/
// import addCompMarker from '../actions/addCompMarker';
// import { addCompMarker } from '../actions/game';

/*** ai functions ***/
import completeAnyTwo from './AI/completeAnyTwo';
import blockAnyTwo    from './AI/blockAnyTwo';
import boardFull      from './AI/boardFull';


const cornorsEmpty = (gameBoard, actions, marker) => {
    const cornors = ['a1', 'a3', 'c1', 'c3'];
        if (cornors.every(square =>  gameBoard[square] === '')) {
            // actions.addCompMarker('a1', marker);
            return cornors[_.ramdom(0, 3)];
        } else {
            return false;
        }

}


const takeCenterWhenEmpty = (gameBoard, actions, marker) => {
    if(gameBoard.b2 === '') {
        // actions.addCompMarker('b2', marker);
        return 'b2';
    } else {
        return false;
    }
}



const compTurn = (gameBoard, actions, marker) => {
    const edges = ['a2', 'b1', 'b3', 'c2'];

//// need to work on this part since comp can mark multiple moves


    let square = completeAnyTwo(gameBoard, actions, marker) ||
        blockAnyTwo(gameBoard, actions, marker) ||
        cornorsEmpty(gameBoard, actions, marker) ||
        takeCenterWhenEmpty(gameBoard, actions, marker);


    if (boardFull(gameBoard)) { console.log('Full board game over'); }
    console.log('square ' + square + ' ' + typeof square);

    return square;






}

export default compTurn;