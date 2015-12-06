import _ from 'lodash';
/**
 * Returns true if the board is full. The test is to check that every value in
 * the board object is NOT empty.
 * @param  {Object} store Redux Store
 * @return {boolean}       true if full board.
 */
const boardFull = (store) => {
    const board = store.getState().ticTacGame;
    return _.every(board, function(value) {
        return value !== '';

    });
}

export default boardFull;