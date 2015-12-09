/*** actions ***/
import { addCompMarker } from '../../actions/board';
import _ from 'lodash';
/*** Testing helpers ***/
import runTest from './helpers/runTest';
import makeStateMap from './helpers/makeStateMap';

const completeAnyTwo = (store) => {
    const { ticTacGame: gameBoard, settings } = store.getState();
    const patterns = [
        ' OO',
        'O O',
        'OO '
    ];

    const boardStateMap = makeStateMap(gameBoard);

    return runTest(boardStateMap, patterns, store);

}

export default completeAnyTwo;