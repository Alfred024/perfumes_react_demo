import React from 'react';
import { Card } from '../../Card';
import { AppContext } from '../../../context';

function Card_container() {
    const context = React.useContext(AppContext);
    
    return(
        <div className='cardsContainer'>
            {context.cards?.map(card =>(
                <Card
                    key={card.id}
                    product = {card.title} 
                    price = {card.price} 
                    image = {card.images[0]} 
                    category = {card.category.name}
                    description = {card.description}
                />
            ))}
            
        </div>
    );
}

export {Card_container};