const takeCenterWhenEmpty = (gameBoard) => {
    if(gameBoard.b2 === '') {
        // actions.addCompMarker('b2', marker);
        return 'b2';
    } else {
        return false;
    }
}

export default takeCenterWhenEmpty;