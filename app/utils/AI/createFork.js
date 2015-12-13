import _ from 'lodash';

const createFork = (gameBoard, marker = 'O') => {
    const sides = [
        {
            side: 'a2',
            possibles: ['a1', 'a3']
        },
        {
            side: 'b1',
            possibles: ['a1', 'c1']
        },
        {
            side: 'b3',
            possibles: ['a3', 'c3']
        },
        {
            side: 'c2',
            possibles: ['c1', 'c3']
        },
    ];

    let availibleCorners = [];
    const center = 'b2';
    const userMarker = marker === 'O' ? 'X' : 'O';

    if (gameBoard[center] !== '') {
        return false;
    }
    const sidesTakenByUser = sides.filter(({ side, possibles }) => {
        return gameBoard[side] === userMarker;
    })

    if (sidesTakenByUser.length === 1) {
        availibleCorners = sidesTakenByUser[0].possibles.filter((corner) => {
            return gameBoard[corner] === '';
        });
    }

    const len = availibleCorners.length - 1;
    const random = _.random(len);

    return availibleCorners[random] || false;
}

export default createFork;