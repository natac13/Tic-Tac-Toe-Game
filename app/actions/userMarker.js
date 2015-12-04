export default function userMarker(square) {
    return {
            type: 'PLACE_USER_MARKER',
            square: square,
            marker: 'X'
        };
}