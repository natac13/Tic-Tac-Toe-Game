import _ from 'lodash';

/*** actions ***/
// import addCompMarker from '../actions/addCompMarker';
// import { addCompMarker } from '../actions/game';

/*** ai functions ***/
import completeAnyTwo      from './AI/completeAnyTwo';
import blockAnyTwo         from './AI/blockAnyTwo';
import blockFork           from './AI/blockFork';
import takeCenterWhenEmpty from './AI/takeCenterWhenEmpty';
import takeOppositeCorner  from './AI/takeOppositeCorner';
import cornersEmpty        from './AI/cornersEmpty';
import sidesEmpty          from './AI/sidesEmpty';











const compTurn = (gameBoard, marker) => {
    /**
     * Going through the 'list' of rule functions to find the comps move. Once
     * a value is found then square is return so that the action in Main.js
     * can dispatch to the store the mutations
     * @type {string}
     */
    let square =
        completeAnyTwo(gameBoard, marker) || // capture win
        blockAnyTwo(gameBoard, marker) || // block opponent win
        // fork || create a fork
        blockFork(gameBoard, marker) || // block opponent fork
        takeCenterWhenEmpty(gameBoard) || // play the empty center
        takeOppositeCorner(gameBoard) || // play opposite corner
        cornersEmpty(gameBoard) || // play empty corner
        sidesEmpty(gameBoard); // play empty side

    return square;






}

export default compTurn;