import React from 'react';
import _ from 'lodash';

const Square = ({ placeMarker, square, marker }) => {

    return (
        <button className="btn btn-primary square" onClick={placeMarker} id={square}>
            {!!marker && marker}
        </button>
    );

}
export default Square;