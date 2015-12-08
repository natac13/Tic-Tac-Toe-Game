import * as types from '../constants/ActionTypes';

export const addUserMarker = (square, userMarker) => {
    return {
            type: types.PLACE_USER_MARKER,
            square: square,
            marker: userMarker
        };
}

export const addCompMarker = (square, compMarker) => {
    return {
            type: types.PLACE_USER_MARKER,
            square: square,
            marker: compMarker
        };
}