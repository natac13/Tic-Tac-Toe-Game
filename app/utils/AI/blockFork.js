import _ from 'lodash';


const blockFork = (gameBoard, marker = 'O') => {
    /**
     * forksPairs is an array of arrays that are the corner pairs
     * @type {Array}
     */
    const forksPairs = [['a1', 'c3'], ['a3', 'c1']];
    const sides = ['a2', 'b1', 'b3', 'c2'];
    let availibleSide = [];
    const userMarker = marker === 'O' ? 'X' : 'O';

    // if (gameBoard[center] === '') { return false; }

    if (forksPairs.some(([ x, y ]) => {
        return gameBoard[x] === userMarker && gameBoard[y] === userMarker;
    })) {
        availibleSide = sides.filter(side => gameBoard[side] === '')
    }

    const len = availibleSide.length - 1;
    const random = _.random(len);

    return availibleSide[random] || false;


}

export default blockFork;