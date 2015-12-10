import _ from 'lodash';
/*** Testing helpers ***/
import runTest from './helpers/runTest';
import makeStateMap from './helpers/makeStateMap';

const completeAnyTwo = (gameBoard) => {
    const patterns = [
        ' OO',
        'O O',
        'OO '
    ];

    const boardStateMap = makeStateMap(gameBoard);

    return runTest(boardStateMap, patterns);

}

export default completeAnyTwo;