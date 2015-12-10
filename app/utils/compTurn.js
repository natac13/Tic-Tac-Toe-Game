import _ from 'lodash';

/*** actions ***/
// import addCompMarker from '../actions/addCompMarker';
// import { addCompMarker } from '../actions/game';

/*** ai functions ***/
import completeAnyTwo      from './AI/completeAnyTwo';
import blockAnyTwo         from './AI/blockAnyTwo';
import takeCenterWhenEmpty from './AI/takeCenterWhenEmpty';
import cornorsEmpty        from './AI/cornorsEmpty';

import boardFull           from './AI/boardFull';









const compTurn = (gameBoard) => {
    const edges = ['a2', 'b1', 'b3', 'c2'];

    /**
     * Going through the 'list' of rule functions to find the comps move. Once
     * a value is found then square is return so that the action in Main.js
     * can dispatch to the store the mutations
     * @type {string}
     */
    let square = completeAnyTwo(gameBoard) ||
        blockAnyTwo(gameBoard) ||
        cornorsEmpty(gameBoard) ||
        takeCenterWhenEmpty(gameBoard);


    if (boardFull(gameBoard)) { console.log('Full board game over'); }


    return square;






}

export default compTurn;