import React from 'react';

function Card_container({children}) {
    const [consuming, setConsuming] = React.useState();

    return(
        <div className='cardsContainer'>
            {children}
        </div>
    );
}

export {Card_container};