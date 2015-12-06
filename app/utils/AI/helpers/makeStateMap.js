import _ from 'lodash';

const makeStateMap = (gameBoard) => {
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
    return boardStateMap;
}

export default makeStateMap;