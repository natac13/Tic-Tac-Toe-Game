export default function addUserMarker(square, userMarker) {
    return {
            type: 'PLACE_USER_MARKER',
            square: square,
            marker: userMarker
        };
}