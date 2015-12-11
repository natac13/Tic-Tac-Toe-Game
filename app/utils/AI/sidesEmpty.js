import _ from 'lodash';

const sidesEmpty = (gameBoard) => {
    const sides = ['a2', 'b1', 'b3', 'c2'];

    const opensides = sides.filter((square) => {
        return gameBoard[square] === '';
    });
    const len = opensides.length - 1;



    return opensides[_.random(0, len)];


}

export default sidesEmpty;