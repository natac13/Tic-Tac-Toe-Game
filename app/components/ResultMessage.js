import React from 'react';

const ResultMessage = ({ message, value }) => {
    return (
        <p className="result"> {message}: <span className="num">{value}</span></p>
    )
}

export default ResultMessage;