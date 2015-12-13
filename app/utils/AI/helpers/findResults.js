import _ from 'lodash';
/**
 * [findResults description]
 * @param  {object} gameBoard the state of the gameBoard
 * @return {string}           A string message to display to the user.
 */
export default function findResults(gameBoard) {
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

    if (gameStateSection.some((section) => {
        return section === 'OOO';
    })) {
        return 'O';
    }

    else if (gameStateSection.some((section) => {
        return section === 'XXX';
    })) {
        return 'X';
    }

    else {
        return false
    }

    // should not just return a string.
    // maybe false when no winner and tie when the board is full.
}