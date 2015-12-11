/**
 * Takes in the gameBoard and will take the any opposite corner on the game board
 * This will happen in a sequence in compTurn()
 *
 * I start with a list of list which represent the corner pairs. I map over this
 * to give me a new list of just strings which are the square labels or false if
 * the pair does not match the patterns made by the 'if' statements.
 * @param  {object} gameBoard The game board from the state of the Main.js
 * component.
 * @return {string}           the square that the comp should take based of the
 * logic. I get this be filtering the list of matches
 */
const takeOppositeCorner = (gameBoard) => {
    const cornersPairs = [['a1', 'c3'], ['c1', 'a3']];
    let cornerPairsMatchingPattern = cornersPairs.map(([pri, sec]) => {
        if (gameBoard[pri] === 'X' && gameBoard[sec] === '') {
            return sec;
        }
        if (gameBoard[sec] === 'X' && gameBoard[pri] === '') {
            return pri;
        }
        return false;
    });
    return cornerPairsMatchingPattern.filter((matchingPair) => {
        return matchingPair !== false;
    }).join('');
}


export default takeOppositeCorner