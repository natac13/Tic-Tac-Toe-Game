/*** actions ***/

import { addCompMarker } from '../../actions/game';

import _ from 'lodash';
/*** Testing helpers ***/
import runTest from './helpers/runTest';
import makeStateMap from './helpers/makeStateMap';

const completeAnyTwo = (gameBoard, actions, marker) => {
    const patterns = [
        ' OO',
        'O O',
        'OO '
    ];

    const boardStateMap = makeStateMap(gameBoard);

    return runTest(boardStateMap, patterns, actions, marker);

}

export default completeAnyTwo;