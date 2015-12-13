import _ from 'lodash';

const cornersEmpty = (gameBoard) => {
    const corners = ['a1', 'a3', 'c1', 'c3'];

    const openCorners = corners.filter((square) => {
        return gameBoard[square] === '';
    });
    const len = openCorners.length - 1;
    const random = _.random(0, len);

    return openCorners[random];


}

export default cornersEmpty;