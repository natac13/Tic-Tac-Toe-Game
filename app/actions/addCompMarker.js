export default function addCompMarker(square, compMarker) {
    return {
            type: 'PLACE_USER_MARKER',
            square: square,
            marker: compMarker
        };
}