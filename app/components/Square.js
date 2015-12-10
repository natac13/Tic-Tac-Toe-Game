import React from 'react';

const Square = ({ placeMarker, square, marker }) => {

    return (
        <button className="square" onClick={placeMarker} id={square}>
            {!!marker && marker}
        </button>
    );

}
export default Square;