import React from 'react';
import classnames from 'classnames';

const Square = ({ placeMarker, square, marker }) => {

    let squareClass = classnames({
        'square': true,
        'active': !!marker,
        'user': marker === 'X',
        'comp': marker === 'O'
    });

    return (

        <button className={squareClass} onClick={placeMarker} id={square} disabled={!!marker}>
            {!!marker && marker}
        </button>
    );

}
export default Square;