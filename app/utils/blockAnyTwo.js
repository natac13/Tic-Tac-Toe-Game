import _ from 'lodash';
import addCompMarker from '../actions/addCompMarker';


const blockAnyTwo = (store) => {
    const { ticTacGame: gameBoard, settings } = store.getState();
    /**
     * Constructed so that the index of each possible sequence corresponds to the
     * position the computer need to place their marker.
     * @type {Array}
     */
    const possibles = [
        ' XX',
        'X X',
        'XX '
    ]
    // change the gameBoard object to an array which I can slice to check
    const boardArray = _.map(gameBoard, value => value || ' ');

    /**
     * From the redux store which. Take the array version of the game board to
     * get string versions of the state of the board, or more specifically the
     * row, column or diagonal.
     * @type {Array}
     */
    const gameStateSection = [
        boardArray.slice(0, 3).join(''), // row 1
        boardArray.slice(3, 6).join(''), // row 2
        boardArray.slice(6, 9).join(''), // row 3
        boardArray[0] + boardArray[3] + boardArray[6], // column 1
        boardArray[1] + boardArray[4] + boardArray[7], // column 2
        boardArray[2] + boardArray[5] + boardArray[8], // column 3
        boardArray[0] + boardArray[4] + boardArray[8], // right diagonal
        boardArray[2] + boardArray[4] + boardArray[6]  // left diagonal
    ];
    /**
     * Used to find the position of the computers move. The possibles array is
     * constructed in a way that the 'hole' which needs to be filled is being
     * represented by the index value of that possible section in the possibles
     * array.
     * @type {Array}
     */
    const squareMap = [
        ['a1', 'a2', 'a3'], // row 1
        ['b1', 'b2', 'b3'], // row 2
        ['c1', 'c2', 'c3'], // row 3
        ['a1', 'b1', 'c1'], // column 1
        ['a2', 'b2', 'c2'], // column 2
        ['a3', 'b3', 'c3'], // column 3
        ['a1', 'b2', 'c3'], // right diagonal
        ['a3', 'b2', 'c1']  // left diagonal
    ];
    /*** Zip the above list together as they are used to simulate the AI ***/
    const boardStateMap = _.zip(gameStateSection, squareMap);

    function runTest(stateMap, possibles) {
        stateMap.forEach(function(mapPair) {
            // make vars out of the zipped list values
            let [ sequence, boardMap ] = mapPair;
            /*** The Test ***/
            /*
            If the sequence is present in the possibles array then the comp needs
            to follow this AI 'rule'.
            Finding the index of the sequence in the possibles array I can get
            the square 'name' (etc 'a1' or 'c3') to use to call the action which
            will describe the mutation to the state.
             */
            if (_.includes(possibles, sequence)) {
                let pos = boardMap[possibles.indexOf(sequence)];
                store.dispatch(addCompMarker(pos, settings.comp));
                return;
            }
        });
    }

    runTest(boardStateMap, possibles);


// was able to remove this mess by using zip and creating a function to handle
// the switching out of the vars
    // let topSquares = ['a1', 'a2', 'a3'];
    // let middleSquares = ['b1', 'b2', 'b3'];
    // let bottomSquares = ['c1', 'c2', 'c3'];
    // let firstCol = ['a1', 'b1', 'c1'];
    // let secondCol = ['a2', 'b2', 'c2'];
    // let thirdCol = ['a3', 'b3', 'c3'];
    // let rightDia = ['a1', 'b2', 'c3'];
    // let leftDia = ['a3', 'b2', 'c1'];

    // const row1 = boardArray.slice(0, 3).join('');
    // const row2 = boardArray.slice(3, 6).join('');
    // const row3 = boardArray.slice(6, 9).join('');
    // const hor1 = boardArray[0] + boardArray[3] + boardArray[6];
    // const hor2 = boardArray[1] + boardArray[4] + boardArray[7];
    // const hor3 = boardArray[2] + boardArray[5] + boardArray[8];
    // const dia1 = boardArray[0] + boardArray[4] + boardArray[8];
    // const dia2 = boardArray[2] + boardArray[4] + boardArray[6];
    /*** rows ***/
    // if (_.includes(possibles, row1)) {
    //     let pos = topSquares[possibles.indexOf(row1)];
    //     store.dispatch(addCompMarker(pos, settings.comp));
    //     return;
    // }
    // if (_.includes(possibles, row2)) {
    //     let pos = middleSquares[possibles.indexOf(row2)];
    //     store.dispatch(addCompMarker(pos, settings.comp));
    //     return;
    // }
    // if (_.includes(possibles, row3)) {
    //     let pos = bottomSquares[possibles.indexOf(row3)];
    //     store.dispatch(addCompMarker(pos, settings.comp));
    //     return;
    // }
    // /*** horizontal ***/
    // if (_.includes(possibles, hor1)) {
    //     let pos = firstCol[possibles.indexOf(hor1)];
    //     store.dispatch(addCompMarker(pos, settings.comp));
    //     return;
    // }
    // if (_.includes(possibles, hor2)) {
    //     let pos = secondCol[possibles.indexOf(hor2)];
    //     store.dispatch(addCompMarker(pos, settings.comp));
    //     return;
    // }
    // if (_.includes(possibles, hor3)) {
    //     let pos = thirdCol[possibles.indexOf(hor3)];
    //     store.dispatch(addCompMarker(pos, settings.comp));
    //     return;
    // }

    // /*** Diagonals ***/
    // if (_.includes(possibles, dia1)) {
    //     let pos = rightDia[possibles.indexOf(dia1)];
    //     store.dispatch(addCompMarker(pos, settings.comp));
    //     return;
    // }
    // if (_.includes(possibles, dia2)) {
    //     let pos = leftDia[possibles.indexOf(dia2)];
    //     store.dispatch(addCompMarker(pos, settings.comp));
    //     return;
    // }

}

export default blockAnyTwo;