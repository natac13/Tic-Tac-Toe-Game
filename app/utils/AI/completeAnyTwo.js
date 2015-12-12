import _ from 'lodash';
/*** Testing helpers ***/
import runTest from './helpers/runTest';
import makeStateMap from './helpers/makeStateMap';

const completeAnyTwo = (gameBoard, marker='O') => {
    let patterns = [
        ' OO',
        'O O',
        'OO '
    ];

    if (marker === 'X') {
        patterns = [
            ' XX',
            'X X',
            'XX '
        ];
    }



    const boardStateMap = makeStateMap(gameBoard);

    return runTest(boardStateMap, patterns);

}

export default completeAnyTwo;