import _ from 'lodash';


const blockFork = (gameBoard, marker = 'O') => {
    /**
     * forks is an array of object which are the forks with the square the comp
     * should take if available.
     * @type {Array}
     */
    const forks = [
        {
            x: 'a2',
            y: 'b1',
            square: 'a1'
        },
        {
            x: 'a2',
            y: 'b3',
            square: 'a3'
        },
        {
            x: 'c2',
            y: 'b1',
            square: 'c1'
        },
        {
            x: 'c2',
            y: '31',
            square: 'c3'
        },

    ]
    const userMarker = marker === 'O' ? 'X' : 'O';
    /*
    I first use to find an matching forks. Then feed it to map so I return just
    the square value;
     */
    const squaresFromMatchingForks = forks.filter(({ x, y }) => {
        return (gameBoard[x] === userMarker && gameBoard[y] === userMarker)
    }).map(({ x, y, square }) => {
        return square
    });
    // check that the gameBoard square is free. I do this since this rule is high
    // on the list and figure there could be multiple matches during game play
    // that my tests are not covering.
    const availableSquares = squaresFromMatchingForks.filter((square) => {
        return gameBoard[square] === '';
    });

    const len = availableSquares.length - 1;
    const random = _.random(len);

    // the or latch will take the second value if both are false.
    return availableSquares[random] || false;



}

export default blockFork;