import React from 'react';
import _ from 'lodash';

const Square = ({ placeMarker, square, marker }) => {

    return (
        <button className="square" onClick={placeMarker} id={square}>
            {!!marker && marker}
        </button>
    );

}
export default Square;