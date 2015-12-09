import * as types from '../constants/ActionTypes';
console.log(types.PLACE_USER_MARKER);
export function addUserMarker (square, userMarker) {
    return {
            type: types.PLACE_USER_MARKER,
            square: square,
            marker: userMarker
        };
}

export function addCompMarker (square, compMarker) {

    return {
            type: types.PLACE_USER_MARKER,
            square: square,
            marker: compMarker
        };
}
