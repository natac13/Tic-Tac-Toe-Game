import _ from 'lodash';
/**
 * Returns true if the board is dirty, meaning there is at least one square
 * taken by a marker.
 * @param  {Object} store Redux Store
 * @return {boolean}       true if full board.
 */
const boardDirty = (gameBoard) => {

    return _.some(gameBoard, function(value) {
        return value !== '';

    });
}

export default boardDirty;