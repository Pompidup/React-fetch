import React from 'react';

const DisplayQuote = ({ quote }) => {
    return (
        <div>
            <img src={quote.image} alt={quote.character} />
            <p>{quote.character}</p>
            <p>{quote.quote}</p>
        </div>
    );
};

export default DisplayQuote;
