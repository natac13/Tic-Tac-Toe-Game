import _ from 'lodash';

const sidesEmpty = (gameBoard) => {
    const sides = ['a2', 'b1', 'b3', 'c2'];

    const openSides = sides.filter((square) => {
        return gameBoard[square] === '';
    });
    const len = openSides.length - 1;
    const random = _.random(0, len);

    return openSides[random];


}

export default sidesEmpty;