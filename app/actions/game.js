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

export function toggleCompTurn() {
    return {
        type: types.TOGGLE_COMP_TURN
    }
}

export function clearBoard() {
    return {
        type: types.CLEAR_BOARD
    }
}