import React from 'react';
import { Card } from '../../components/Card';
//import { Card_container } from '../../components/Card_container/index.js';

function Home_page() {
    const [cards, setCards] = React.useState(null);

    React.useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=27')
            .then(response => response.json())
            .then(data => setCards(data));
    }, []);

    return ( 
      <>
        Home section
        
        <div className='cardsContainer'>
            {cards?.map(card =>(
                <Card
                    key={card.id}
                    product = {card.title} 
                    price = {card.price} 
                    image = {card.images[0]} 
                    category = {card.category.name}
                />
            ))}
            
        </div>
      </>      
    );
}

export {Home_page};
