import * as types from '../constants/ActionTypes';

export function addMarker(square, marker) {
    return {
            type: types.PLACE_MARKER,
            square: square,
            marker: marker
        };
}

export function setUserMarker(marker) {
    return {
        type: types.SET_USER_MARKER,
        marker: marker
    }
}

export function setCompTurn() {
    return {
        type: types.SET_COMP_TURN
    }
}

export function setUserTurn() {
    return {
        type: types.SET_USER_TURN
    }
}

export function clearBoard() {
    return {
        type: types.CLEAR_BOARD
    }
}

export function XWin() {
    return {
        type: types.X_WIN
    }
}

export function OWin() {
    return {
        type: types.O_WIN
    }
}

export function tie() {
    return {
        type: types.TIE
    }
}