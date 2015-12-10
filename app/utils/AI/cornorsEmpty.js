const cornorsEmpty = (gameBoard) => {
    const cornors = ['a1', 'a3', 'c1', 'c3'];
        if (cornors.every(square =>  gameBoard[square] === '')) {
            // actions.addCompMarker('a1', marker);
            return cornors[_.random(0, 3)];
        } else {
            return false;
        }

}

export default cornorsEmpty;