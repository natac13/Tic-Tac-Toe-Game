import React from 'react';
import _ from 'lodash';

const Square = ({ placeMarker, square, marker }) => {

    return (
        <div className="btn btn-primary btn-lg square" onClick={placeMarker} id={square}>
            {!!marker && marker}
        </div>
    );

}
export default Square;