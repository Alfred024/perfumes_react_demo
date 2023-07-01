// import React from 'react';
// import { Card } from '../../Card';

// function Card_container() {

    // const [cards, setCards] = React.useState(null);

    // React.useEffect(() => {
    //     fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=27')
    //         .then(response => response.json())
    //         .then(data => setCards(data));
    // }, []);
     
    
//     return(
//         <div className='cardsContainer'>
//             {cards?.map(card =>(
//                 <Card
//                     key={card.id}
//                     product = {card.title} 
//                     price = {card.price} 
//                     image = {card.images[0]} 
//                     category = {card.category.name}
//                 />
//             ))}
            
//         </div>
//     );
// }

export {Card_container};