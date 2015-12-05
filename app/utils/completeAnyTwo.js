import addCompMarker from '../actions/addCompMarker';

const completeAnyTwo = (board) => {
    const possibles = [
        ' OO',
        'O O',
        'OO '
    ]
    const boardArray = _.map(board, value => value || ' ');
    console.log(boardArray);
}

export default completeAnyTwo;