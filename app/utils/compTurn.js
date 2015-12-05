import addCompMarker from '../actions/addCompMarker';
import _ from 'lodash';

const cornorsEmpty = (board) => {
    const cornors = ['a1', 'a3', 'c1', 'c3'];
        return cornors.every((square) => {
            return board[square] === ''
        });

}

const boardFull = (board) => {
    return _.every(board, function(value) {
        return value !== '';
    });
}

const completeAnyTwo = (board) => {
    const possibles = [
        'O O',
        'OO ',
        ' OO',
    ]
    const boardArray = _.map(board, value => value || ' ');
    console.log(boardArray);
}


export const blockAnyTwo = (store) => {
    const { ticTacGame: gameBoard, settings } = store.getState();
    const possibles = [
        ' XX',
        'X X',
        'XX '
    ]
    // change the gameBoard object to an array which I can slice to check
    const boardArray = _.map(gameBoard, value => value || ' ');
    let topSquares = ['a1', 'a2', 'a3'];
    let middleSquares = ['b1', 'b2', 'b3'];
    let bottomSquares = ['c1', 'c2', 'c3'];
    let firstCol = ['a1', 'b1', 'c1'];
    let secondCol = ['a2', 'b2', 'c2'];
    let thirdCol = ['a3', 'b3', 'c3'];
    let rightDia = ['a1', 'b2', 'c3'];
    let leftDia = ['a3', 'b2', 'c1'];

    const row1 = boardArray.slice(0, 3).join('');
    const row2 = boardArray.slice(3, 6).join('');
    const row3 = boardArray.slice(6, 9).join('');
    const hor1 = boardArray[0] + boardArray[3] + boardArray[6];
    const hor2 = boardArray[1] + boardArray[4] + boardArray[7];
    const hor3 = boardArray[2] + boardArray[5] + boardArray[8];
    const dia1 = boardArray[0] + boardArray[4] + boardArray[8];
    const dia2 = boardArray[2] + boardArray[4] + boardArray[6];

    /*** rows ***/
    if (_.includes(possibles, row1)) {
        let pos = topSquares[possibles.indexOf(row1)];
        store.dispatch(addCompMarker(pos, settings.comp));
    }
    if (_.includes(possibles, row2)) {
        let pos = middleSquares[possibles.indexOf(row2)];
        store.dispatch(addCompMarker(pos, settings.comp));
    }
    if (_.includes(possibles, row3)) {
        let pos = bottomSquares[possibles.indexOf(row3)];
        store.dispatch(addCompMarker(pos, settings.comp));
    }
    /*** horizontal ***/
    if (_.includes(possibles, hor1)) {
        let pos = firstCol[possibles.indexOf(hor1)];
        store.dispatch(addCompMarker(pos, settings.comp));
    }
    if (_.includes(possibles, hor2)) {
        let pos = secondCol[possibles.indexOf(hor2)];
        store.dispatch(addCompMarker(pos, settings.comp));
    }
    if (_.includes(possibles, hor3)) {
        let pos = thirdCol[possibles.indexOf(hor3)];
        store.dispatch(addCompMarker(pos, settings.comp));
    }

    /*** Diagonals ***/
    if (_.includes(possibles, dia1)) {
        let pos = rightDia[possibles.indexOf(dia1)];
        store.dispatch(addCompMarker(pos, settings.comp));
    }
    if (_.includes(possibles, dia2)) {
        let pos = leftDia[possibles.indexOf(dia2)];
        store.dispatch(addCompMarker(pos, settings.comp));
    }

}


const compTurn = (store) => {
    const { ticTacGame: gameBoard, settings } = store.getState();
    const edges = ['a2', 'b1', 'b3', 'c2'];

    if (cornorsEmpty(gameBoard)) {
        store.dispatch(addCompMarker('a1', settings.comp));
    }


    blockAnyTwo(store);







}

export default compTurn;