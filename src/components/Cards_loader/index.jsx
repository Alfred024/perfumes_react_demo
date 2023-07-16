import React from 'react';
import { Card } from '../../Card';

function Cards_loader() {
    
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

export {Cards_loader};