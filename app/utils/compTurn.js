import _ from 'lodash';

/*** actions ***/
// import addCompMarker from '../actions/addCompMarker';
// import { addCompMarker } from '../actions/game';

/*** ai functions ***/
import completeAnyTwo      from './AI/completeAnyTwo';
import blockAnyTwo         from './AI/blockAnyTwo';
import takeCenterWhenEmpty from './AI/takeCenterWhenEmpty';
import takeOppositeCorner  from './AI/takeOppositeCorner';
import cornersEmpty        from './AI/cornersEmpty';
import sidesEmpty          from './AI/sidesEmpty';

import boardFull           from './AI/boardFull';









const compTurn = (gameBoard) => {
    /**
     * Going through the 'list' of rule functions to find the comps move. Once
     * a value is found then square is return so that the action in Main.js
     * can dispatch to the store the mutations
     * @type {string}
     */
    let square = completeAnyTwo(gameBoard) || // capture win
        blockAnyTwo(gameBoard) || // block opponent win
        // fork || create a fork
        // block fork || block opponent fork
        takeCenterWhenEmpty(gameBoard) || // play the empty center
        takeOppositeCorner(gameBoard) || // play opposite corner
        cornersEmpty(gameBoard) || // play empty corner
        sidesEmpty(gameBoard); // play empty side


    if (boardFull(gameBoard)) { console.log('Full board game over'); }


    return square;






}

export default compTurn;